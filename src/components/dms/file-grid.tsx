import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontal,
  Download,
  Share2,
  Trash2,
  Star,
  Edit,
  Eye,
  Clock,
  Folder,
  FileText,
  FileSpreadsheet,
  FileImage,
  File,
  Archive,
  Presentation,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FileItem } from '@/lib/types';
import { formatFileSize, formatDate } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface FileGridProps {
  files: FileItem[];
  selectedFiles?: Set<string>;
  onSelectFiles?: (fileIds: Set<string>) => void;
  onFileClick?: (file: FileItem) => void;
  onFileAction?: (action: string, fileId: string) => void;
}

const fileIcons: Record<string, any> = {
  folder: Folder,
  pdf: FileText,
  doc: FileText,
  docx: FileText,
  xls: FileSpreadsheet,
  xlsx: FileSpreadsheet,
  csv: FileSpreadsheet,
  jpg: FileImage,
  png: FileImage,
  gif: FileImage,
  zip: Archive,
  ppt: Presentation,
  pptx: Presentation,
  txt: FileText,
};

const fileIconColors: Record<string, string> = {
  folder: 'text-blue-500 bg-blue-50 dark:bg-blue-950',
  pdf: 'text-red-500 bg-red-50 dark:bg-red-950',
  doc: 'text-blue-500 bg-blue-50 dark:bg-blue-950',
  docx: 'text-blue-500 bg-blue-50 dark:bg-blue-950',
  xls: 'text-green-500 bg-green-50 dark:bg-green-950',
  xlsx: 'text-green-500 bg-green-50 dark:bg-green-950',
  csv: 'text-green-500 bg-green-50 dark:bg-green-950',
  jpg: 'text-purple-500 bg-purple-50 dark:bg-purple-950',
  png: 'text-purple-500 bg-purple-50 dark:bg-purple-950',
  gif: 'text-purple-500 bg-purple-50 dark:bg-purple-950',
  zip: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950',
  ppt: 'text-orange-500 bg-orange-50 dark:bg-orange-950',
  pptx: 'text-orange-500 bg-orange-50 dark:bg-orange-950',
  txt: 'text-gray-500 bg-gray-50 dark:bg-gray-950',
};

function getFileIcon(type: string) {
  return fileIcons[type] || File;
}

function getFileIconColor(type: string) {
  return fileIconColors[type] || 'text-gray-500 bg-gray-50 dark:bg-gray-950';
}

export function FileGrid({
  files,
  selectedFiles = new Set(),
  onSelectFiles,
  onFileClick,
  onFileAction
}: FileGridProps) {
  const handleSelectFile = (fileId: string, checked: boolean) => {
    const newSelection = new Set(selectedFiles);
    if (checked) {
      newSelection.add(fileId);
    } else {
      newSelection.delete(fileId);
    }
    onSelectFiles?.(newSelection);
  };

  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
        <Folder className="h-16 w-16 mb-4 text-muted-foreground/50" />
        <p className="text-lg font-medium">No files yet</p>
        <p className="text-sm">Upload files to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {files.map((file) => {
        const FileIcon = getFileIcon(file.type);
        const iconColor = getFileIconColor(file.type);
        const isSelected = selectedFiles.has(file.id);

        return (
          <Card
            key={file.id}
            className={cn(
              'group relative hover:shadow-md transition-all cursor-pointer',
              isSelected && 'ring-2 ring-primary'
            )}
          >
            <CardContent className="pt-6 pb-4">
              <div className="absolute top-2 left-2 z-10" onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={(checked) => handleSelectFile(file.id, checked as boolean)}
                  className="bg-background"
                  aria-label={`Select ${file.name}`}
                />
              </div>
              <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-background">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onFileAction?.('preview', file.id)}>
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFileAction?.('download', file.id)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFileAction?.('share', file.id)}>
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFileAction?.('rename', file.id)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFileAction?.('versions', file.id)}>
                      <Clock className="mr-2 h-4 w-4" />
                      Version History
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => onFileAction?.('delete', file.id)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div
                className="flex flex-col items-center gap-3"
                onClick={() => onFileClick?.(file)}
              >
                <div className={cn('flex h-20 w-20 items-center justify-center rounded-lg', iconColor)}>
                  <FileIcon className="h-10 w-10" />
                </div>
                <div className="text-center w-full">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <h3 className="font-medium text-sm truncate max-w-[180px]" title={file.name}>
                      {file.name}
                    </h3>
                    {file.isStarred && (
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {file.isFolder ? 'Folder' : formatFileSize(file.size)}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-4 flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
              <div className="flex items-center gap-1">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={file.owner.avatar} alt={file.owner.name} />
                  <AvatarFallback className="text-[10px]">
                    {file.owner.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate max-w-[100px]">{file.owner.name}</span>
              </div>
              <span>{formatDate(file.modifiedAt)}</span>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

