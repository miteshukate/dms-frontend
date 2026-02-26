import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileTable } from '@/components/dms/file-table';
import { FileGrid } from '@/components/dms/file-grid';
import { FileTreeNavigation } from '@/components/dms/file-tree-navigation';
import {
  LayoutGrid,
  List,
  Download,
  Trash2,
  Share2,
  Filter,
  SortAsc,
  FolderPlus,
  Star,
  Upload,
} from 'lucide-react';
import { mockFiles, mockFolders, mockStorageStats } from '@/lib/mock-data';
import { useNavigate } from 'react-router-dom';
import { FilesApi } from "@/client";
import type { FileResponse } from "@/client/models";
import type { FileItem } from "@/lib/types";
import {getAxiosInstance} from "@/client/axios-setup.ts";

export default function FileExplorer() {
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [selectedFolder, setSelectedFolder] = useState<string>('root');
  const navigate = useNavigate();

  // State for current files in selected folder
  const [currentFiles, setCurrentFiles] = useState<FileItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper function to convert FileResponse to FileItem format
  const convertFileResponseToFileItem = (file: FileResponse): FileItem => {
    // Map file extension to FileType
    const fileTypeMap: Record<string, FileItem['type']> = {
      'pdf': 'pdf',
      'doc': 'doc',
      'docx': 'docx',
      'xls': 'xls',
      'xlsx': 'xlsx',
      'ppt': 'ppt',
      'pptx': 'pptx',
      'txt': 'txt',
      'csv': 'csv',
      'jpg': 'jpg',
      'png': 'png',
      'gif': 'gif',
      'zip': 'zip',
      'folder': 'folder',
    };

    const fileType = file.extension ? fileTypeMap[file.extension] || 'file' : 'file';

    // Build owner name from UserSummary (firstName + lastName)
    const ownerName = file.owner?.firstName && file.owner?.lastName
      ? `${file.owner.firstName} ${file.owner.lastName}`
      : file.owner?.firstName
        ? file.owner.firstName
        : 'Unknown';

    return {
      id: file.id,
      name: file.name,
      type: fileType as FileItem['type'],
      size: file.size,
      owner: {
        id: file.ownerId,
        name: ownerName,
        email: file.owner?.email || '',
        avatar: file.owner?.avatarUrl || undefined,
        role: 'viewer',
        team: undefined,
        lastActive: new Date(),
        createdAt: new Date(),
      },
      createdAt: new Date(file.createdAt),
      modifiedAt: new Date(file.updatedAt),
      parentId: file.folderId,
      isFolder: false,
      isStarred: false,
      tags: file.tags || [],
      version: file.currentVersion || 1,
      path: file.path || `/${file.name}`,
    };
  };

  // Fetch files from API when selectedFolder changes
  useEffect(() => {
    const fetchFiles = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Get the configured axios instance with debugging
        const axiosInstance = getAxiosInstance();
        const fileApi = new FilesApi(undefined, undefined, axiosInstance);

        let apiResponse;

        if (selectedFolder === 'root') {
          // Get all files - returns AxiosPromise<GetFilesByFolder200Response>
          console.log('Fetching files from API...');
          apiResponse = await fileApi.getAllFiles(0, 100, 'createdAt,desc');

          console.log('=== FULL API RESPONSE ===');
          console.log('apiResponse:', apiResponse);
          console.log('apiResponse type:', typeof apiResponse);
          console.log('apiResponse.data:', apiResponse.data);
          console.log('apiResponse.data type:', typeof apiResponse.data);
          console.log('apiResponse.data is array?:', Array.isArray(apiResponse.data));
          console.log('apiResponse.data keys:', apiResponse.data ? Object.keys(apiResponse.data) : 'null');
          console.log('apiResponse.status:', apiResponse.status);
          console.log('apiResponse.statusText:', apiResponse.statusText);
          console.log('apiResponse.headers:', apiResponse.headers);
          console.log('=== END RESPONSE ===');
        } else {
          // TODO: Use getFilesByFolder once API client is regenerated
          // For now, filter mock data for the selected folder
          apiResponse = {
            data: {
              content: mockFiles.filter(f => f.parentId === selectedFolder),
            },
          };
        }

        // Extract data from AxiosResponse
        let responseData = apiResponse.data;

        console.log('API Response data:', {
          type: typeof responseData,
          isArray: Array.isArray(responseData),
          keys: typeof responseData === 'object' ? Object.keys(responseData || {}) : 'N/A',
          sample: Array.isArray(responseData) ? responseData[0] : responseData?.content?.[0],
        });

        // If data is a string (JSON stringified), parse it
        if (typeof responseData === 'string') {
          console.warn('Response was stringified, parsing JSON...');
          try {
            responseData = JSON.parse(responseData);
            console.log('Successfully parsed response:', responseData);
          } catch (parseError) {
            console.error('Failed to parse response as JSON:', parseError);
            throw new Error(`Failed to parse API response: ${parseError}`);
          }
        }

        // Handle different response formats from API
        let files: FileResponse[] = [];

        if (Array.isArray(responseData)) {
          // Response is an array directly (e.g., [{ id: '...', name: '...' }, ...])
          console.log('Response is array directly');
          files = responseData as FileResponse[];
        } else if (responseData && typeof responseData === 'object' && responseData.content) {
          // Response is an object with content property (e.g., { content: [...], totalElements: ... })
          console.log('Response has content property');
          if (!Array.isArray(responseData.content)) {
            throw new Error(`Expected content to be an array, got ${typeof responseData.content}`);
          }
          files = responseData.content as FileResponse[];
        } else if (responseData && typeof responseData === 'object') {
          // Response might be a single object or other structure
          console.warn('Unexpected response structure:', responseData);
          setCurrentFiles([]);
          return;
        } else {
          console.error('No valid response data:', responseData);
          setCurrentFiles([]);
          return;
        }

        // Convert FileResponse array to FileItem array
        console.log(`Converting ${files.length} files from FileResponse to FileItem format`);
        const convertedFiles = files.map((file: FileResponse | FileItem) => {
          // If it's already a FileItem (from mock data), return as is
          if ('type' in file && 'modifiedAt' in file) {
            return file as FileItem;
          }
          // Otherwise convert FileResponse to FileItem
          return convertFileResponseToFileItem(file as FileResponse);
        });

        console.log('Successfully converted files:', convertedFiles.length);
        setCurrentFiles(convertedFiles);
      } catch (err) {
        console.error('Failed to fetch files:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch files from API';
        setError(errorMessage);

        // Fallback to mock data on error
        console.log('Falling back to mock data...');
        const mockFallback = mockFiles
          .filter(f => {
            if (selectedFolder === 'root') {
              return !f.parentId;
            }
            return f.parentId === selectedFolder;
          });
        console.log(`Loaded ${mockFallback.length} files from mock data`);
        setCurrentFiles(mockFallback);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFiles().then(() => {
         console.log('Files loaded for folder:', selectedFolder);
    });
  }, [selectedFolder]);

  const handleFileAction = (action: string, fileId: string) => {
    console.log('Action:', action, 'File:', fileId);
    if (action === 'preview') {
      navigate(`/files/${fileId}`);
    } else if (action === 'share') {
      navigate(`/permissions?fileId=${fileId}`);
    }
  };

  const handleBulkDownload = () => {
    console.log('Downloading files:', Array.from(selectedFiles));
  };

  const handleBulkDelete = () => {
    console.log('Deleting files:', Array.from(selectedFiles));
    setSelectedFiles(new Set());
  };

  const handleBulkShare = () => {
    if (selectedFiles.size === 1) {
      navigate(`/permissions?fileId=${Array.from(selectedFiles)[0]}`);
    } else {
      console.log('Sharing multiple files:', Array.from(selectedFiles));
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      {/*<Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/files">My Files</BreadcrumbLink>
          </BreadcrumbItem>
          {selectedFolder !== 'root' && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {mockFolders.find(f => f.id === selectedFolder)?.name || 'Folder'}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>*/}

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        {/* Left Sidebar - Folder Tree */}
        <Card className="h-fit sticky top-24">
          <CardContent className="p-4">
            <div className="mb-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2"
              >
                <FolderPlus className="h-4 w-4" />
                New Folder
              </Button>
            </div>
            <FileTreeNavigation
              folders={mockFolders}
              selectedId={selectedFolder}
              onSelect={setSelectedFolder}
            />
          </CardContent>
        </Card>

        {/* Main Content Area */}
        <div className="space-y-4">
          {/* Error Alert */}
          {error && (
            <div className="rounded-md bg-red-50 dark:bg-red-950 p-4">
              <p className="text-sm text-red-800 dark:text-red-200">
                {error} Displaying mock data instead.
              </p>
            </div>
          )}

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight">
                {selectedFolder === 'root'
                  ? 'All Files'
                  : mockFolders.find(f => f.id === selectedFolder)?.name
                }
              </h2>
              <Badge variant="secondary">
                {currentFiles.length} {currentFiles.length === 1 ? 'item' : 'items'}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              {/* Bulk Actions */}
              {selectedFiles.size > 0 && (
                <>
                  <Badge variant="default" className="mr-2">
                    {selectedFiles.size} selected
                  </Badge>
                  <Button variant="outline" size="sm" onClick={handleBulkDownload}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleBulkShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleBulkDelete}>
                    <Trash2 className="h-4 w-4 mr-2 text-destructive" />
                    Delete
                  </Button>
                </>
              )}

              {selectedFiles.size === 0 && (
                <>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <SortAsc className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </>
              )}

              {/* View Toggle */}
              <div className="flex items-center border rounded-lg">
                <Button
                  variant={viewMode === 'table' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className="rounded-r-none"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-l-none"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* File View */}
          {isLoading ? (
            <Card className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border border-gray-300 border-t-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-500 dark:text-gray-400">Loading files...</p>
              </div>
            </Card>
          ) : currentFiles.length === 0 ? (
            <Card className="flex items-center justify-center py-12">
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400">No files found</p>
              </div>
            </Card>
          ) : viewMode === 'table' ? (
            <FileTable
              files={currentFiles}
              selectedFiles={selectedFiles}
              onSelectFiles={setSelectedFiles}
              onFileClick={(file) => navigate(`/files/${file.id}`)}
              onFileAction={handleFileAction}
            />
          ) : (
            <FileGrid
              files={currentFiles}
              selectedFiles={selectedFiles}
              onSelectFiles={setSelectedFiles}
              onFileClick={(file) => navigate(`/files/${file.id}`)}
              onFileAction={handleFileAction}
            />
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Activity This Week</CardTitle>
          <CardDescription>Your file management activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
                <Upload className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{mockStorageStats.recentUploads}</p>
                <p className="text-sm text-muted-foreground">Files uploaded</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-950">
                <Share2 className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-muted-foreground">Files shared</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-50 dark:bg-yellow-950">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Files starred</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

