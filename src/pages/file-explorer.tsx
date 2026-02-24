import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
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
import { Badge } from '@/components/ui/badge';

export default function FileExplorer() {
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [selectedFolder, setSelectedFolder] = useState<string>('root');
  const navigate = useNavigate();

  // Filter files by selected folder
  const currentFiles = selectedFolder === 'root'
    ? mockFiles.filter(f => !f.parentId)
    : mockFiles.filter(f => f.parentId === selectedFolder);

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
      <Breadcrumb>
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
      </Breadcrumb>

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
          {viewMode === 'table' ? (
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

