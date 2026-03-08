import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Download,
  Share2,
  Trash2,
  Star,
  MoreHorizontal,
  FileText,
  Calendar,
  User,
  Clock,
  MessageSquare,
  Eye,
  Edit,
  Link as LinkIcon,
  Copy,
} from 'lucide-react';
import {  mockFileVersions, formatFileSize, formatDate, currentUser } from '@/lib/mock-data';
import type { FileVersion } from '@/lib/types';
import {type FileResponse,  FilesApi} from "@/client";
import {getAxiosInstance} from "@/client/axios-setup.ts";
import { saveAs } from 'file-saver';

export default function FilePreview() {
  const { fileId } = useParams();
  const navigate = useNavigate();
  // const file = mockFiles.find(f => f.id === fileId);
  const versions = mockFileVersions[fileId || ''] || [];
  const [showCommentDialog, setShowCommentDialog] = useState(false);
  const [comment, setComment] = useState('');
  const [fileData, setFileData] = useState<FileResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fileNotFound, setFileNotFound] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 'c1',
      user: currentUser,
      content: 'The Q4 numbers look great! Nice work on the analysis.',
      createdAt: new Date('2026-02-22T15:30:00'),
    },
  ]);
  useEffect(() => {
    const handleFile = async () => {
      try {
        setIsLoading(true);
        setFileNotFound(false);

        // Get the configured axios instance with debugging
        const axiosInstance = getAxiosInstance();
        const fileApi = new FilesApi(undefined, undefined, axiosInstance);

        // Fetch file by ID
        console.log('Fetching file from API with ID:', fileId);
        const apiResponse = await fileApi.getFile(fileId || '');

        if (apiResponse.data) {
          setFileData(apiResponse.data);
          console.log('API response data:', apiResponse.data);
        } else {
          console.log('No file data returned from API');
          setFileNotFound(true);
        }
      }
      catch (error) {
        console.error('Error fetching file:', error);
        setFileNotFound(true);
      }
      finally {
        setIsLoading(false);
      }
    };

    if (fileId) {
      handleFile();
    } else {
      setFileNotFound(true);
      setIsLoading(false);
    }
  }, [fileId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading file...</p>
        </div>
      </div>
    );
  }

  if (fileNotFound || !fileData) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <FileText className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
          <h2 className="text-2xl font-bold mb-2">File not found</h2>
          <p className="text-muted-foreground mb-4">The file you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/files')}>
            Back to Files
          </Button>
        </div>
      </div>
    );
  }

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([
        {
          id: `c${comments.length + 1}`,
          user: currentUser,
          content: comment,
          createdAt: new Date(),
        },
        ...comments,
      ]);
      setComment('');
      setShowCommentDialog(false);
    }
  };

  const handleDownloadFile = async () => {
    try {
      const axiosInstance = getAxiosInstance();
      const fileApi = new FilesApi(undefined, undefined, axiosInstance);

      console.log('Downloading file:', fileId);

      // Configure axios to return blob response
      const response = await fileApi.downloadFile(fileId || '', undefined, {
        responseType: 'blob'
      });


      // Create a temporary anchor element and trigger download
      saveAs(response.data, fileData?.name || 'download');

      console.log('File downloaded successfully');
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const handleDownloadVersion = (version: FileVersion) => {
    console.log('Downloading version:', version.version);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Button variant="ghost" size="sm" onClick={() => navigate('/files')} className="mb-4">
          ← Back to Files
        </Button>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight">{fileData.name}</h1>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Star className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {fileData.owner?.firstName || 'Unknown Owner'}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Modified {fileData.createdAt}
                {/*Modified {formatDate(fileData.createdAt)}*/}
              </div>
              <div className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                {formatFileSize(fileData.size)}
              </div>
              <Badge variant="secondary">Version {fileData.currentVersion}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleDownloadFile}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigate(`/permissions?fileId=${fileData.id}`)}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Rename
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Make a Copy
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Get Link
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
        {/* Preview Area */}
        <Card className="h-[calc(100vh-300px)]">
          <CardContent className="p-6 h-full flex items-center justify-center bg-muted/20">
            <div className="text-center space-y-4">
              <div className="mx-auto h-32 w-32 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <FileText className="h-16 w-16 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{fileData.name}</h3>
                <p className="text-muted-foreground">Preview not available</p>
                <p className="text-sm text-muted-foreground">Click download to view the file</p>
              </div>
              <Button size="lg" onClick={handleDownloadFile}>
                <Download className="h-5 w-5 mr-2" />
                Download to View
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* File Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">File Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Type</p>
                <p className="font-medium uppercase">{fileData.mimeType}</p>
              </div>
              <Separator />
              <div>
                <p className="text-muted-foreground mb-1">Size</p>
                <p className="font-medium">{formatFileSize(fileData.size)}</p>
              </div>
              <Separator />
              <div>
                <p className="text-muted-foreground mb-1">Owner</p>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={fileData.owner?.firstName} />
                    <AvatarFallback className="text-xs">
                      {fileData.owner?.firstName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{fileData.owner?.firstName}</span>
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-muted-foreground mb-1">Created</p>
                <p className="font-medium">
                 {/* {fileData.createdAt.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}*/}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-muted-foreground mb-1">Modified</p>
                <p className="font-medium">
                {/*  {fileData.modifiedAt.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}*/}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p className="font-mono text-xs break-all">{fileData.path}</p>
              </div>
              {fileData.tags && fileData.tags.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <p className="text-muted-foreground mb-2">Tags</p>
                    <div className="flex flex-wrap gap-1">
                      {fileData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Comments */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Comments</CardTitle>
                <Button size="sm" variant="ghost" onClick={() => setShowCommentDialog(true)}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {comments.length === 0 ? (
                  <div className="text-center py-6 text-muted-foreground">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No comments yet</p>
                  </div>
                ) : (
                  comments.map((c) => (
                    <div key={c.id} className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Avatar className="h-7 w-7">
                          <AvatarImage src={c.user.avatar} />
                          <AvatarFallback className="text-xs">
                            {c.user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm font-medium">{c.user.name}</p>
                            <span className="text-xs text-muted-foreground">
                              {formatDate(c.createdAt)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{c.content}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Version History */}
      {versions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Version History</CardTitle>
            <CardDescription>
              Previous versions of this document
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {versions.map((version, index) => (
                <div
                  key={version.id}
                  className={`flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors ${
                    index === 0 ? 'border-2 border-primary/20 bg-primary/5' : 'border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">Version {version.version}</p>
                        {index === 0 && (
                          <Badge variant="default" className="text-xs">Current</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(version.size)} • {formatDate(version.uploadedAt)}
                      </p>
                      {version.comment && (
                        <p className="text-xs text-muted-foreground italic mt-1">
                          "{version.comment}"
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 mr-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={version.uploadedBy.avatar} />
                        <AvatarFallback className="text-xs">
                          {version.uploadedBy.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        {version.uploadedBy.name}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadVersion(version)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    {index !== 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => console.log('View version:', version.version)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Comment Dialog */}
      <Dialog open={showCommentDialog} onOpenChange={setShowCommentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Comment</DialogTitle>
            <DialogDescription>
              Share your feedback on this document
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={6}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCommentDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddComment} disabled={!comment.trim()}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Add Comment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

