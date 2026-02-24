import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { UserAvatarGroup } from './user-avatar-group';
import type { LucideIcon } from 'lucide-react';

interface FileTableProps {
  files: FileItem[];
  selectedFiles?: Set<string>;
  onSelectFiles?: (fileIds: Set<string>) => void;
  onFileClick?: (file: FileItem) => void;
  onFileAction?: (action: string, fileId: string) => void;
}

const fileIcons: Record<string, LucideIcon> = {
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

function getFileIcon(type: string) {
  return fileIcons[type] || File;
}

export function FileTable({
  files,
  selectedFiles = new Set(),
  onSelectFiles,
  onFileClick,
  onFileAction
}: FileTableProps) {
  const [sortBy, setSortBy] = useState<'name' | 'modifiedAt' | 'size'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onSelectFiles?.(new Set(files.map(f => f.id)));
    } else {
      onSelectFiles?.(new Set());
    }
  };

  const handleSelectFile = (fileId: string, checked: boolean) => {
    const newSelection = new Set(selectedFiles);
    if (checked) {
      newSelection.add(fileId);
    } else {
      newSelection.delete(fileId);
    }
    onSelectFiles?.(newSelection);
  };

  const sortedFiles = [...files].sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === 'modifiedAt') {
      comparison = a.modifiedAt.getTime() - b.modifiedAt.getTime();
    } else if (sortBy === 'size') {
      comparison = a.size - b.size;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const handleSort = (column: typeof sortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectedFiles.size === files.length && files.length > 0}
                onCheckedChange={handleSelectAll}
                aria-label="Select all files"
              />
            </TableHead>
            <TableHead
              className="cursor-pointer select-none hover:bg-muted/50"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center gap-1">
                Name
                {sortBy === 'name' && (
                  <span className="text-xs">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </div>
            </TableHead>
            <TableHead>Owner</TableHead>
            <TableHead
              className="cursor-pointer select-none hover:bg-muted/50"
              onClick={() => handleSort('modifiedAt')}
            >
              <div className="flex items-center gap-1">
                Modified
                {sortBy === 'modifiedAt' && (
                  <span className="text-xs">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </div>
            </TableHead>
            <TableHead
              className="cursor-pointer select-none hover:bg-muted/50 text-right"
              onClick={() => handleSort('size')}
            >
              <div className="flex items-center justify-end gap-1">
                Size
                {sortBy === 'size' && (
                  <span className="text-xs">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </div>
            </TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedFiles.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center h-32 text-muted-foreground">
                <div className="flex flex-col items-center gap-2">
                  <Folder className="h-12 w-12 text-muted-foreground/50" />
                  <p>No files yet</p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            sortedFiles.map((file) => {
              const FileIcon = getFileIcon(file.type);
              const isSelected = selectedFiles.has(file.id);

              return (
                <TableRow
                  key={file.id}
                  className={cn(
                    'cursor-pointer hover:bg-muted/50 transition-colors',
                    isSelected && 'bg-muted/50'
                  )}
                >
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={(checked) => handleSelectFile(file.id, checked as boolean)}
                      aria-label={`Select ${file.name}`}
                    />
                  </TableCell>
                  <TableCell
                    onClick={() => onFileClick?.(file)}
                    className="font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <FileIcon className={cn('h-5 w-5', file.isFolder ? 'text-blue-500' : 'text-muted-foreground')} />
                      <div className="flex items-center gap-2">
                        <span>{file.name}</span>
                        {file.isStarred && (
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <UserAvatarGroup users={[file.owner]} size="sm" />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(file.modifiedAt)}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {file.isFolder ? '—' : formatFileSize(file.size)}
                  </TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
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
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}

