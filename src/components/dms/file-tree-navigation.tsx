import { useState } from 'react';
import { ChevronRight, Folder, FolderOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FolderNode } from '@/lib/types';

interface FileTreeNavigationProps {
  folders: FolderNode[];
  selectedId?: string;
  onSelect?: (folderId: string) => void;
}

export function FileTreeNavigation({ folders, selectedId, onSelect }: FileTreeNavigationProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root']));

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFolder = (folder: FolderNode, level: number = 0) => {
    const isExpanded = expandedFolders.has(folder.id);
    const isSelected = selectedId === folder.id;
    const FolderIcon = isExpanded ? FolderOpen : Folder;

    return (
      <div key={folder.id}>
        <button
          onClick={() => {
            toggleFolder(folder.id);
            onSelect?.(folder.id);
          }}
          className={cn(
            'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent transition-colors',
            isSelected && 'bg-accent text-accent-foreground font-medium'
          )}
          style={{ paddingLeft: `${level * 12 + 8}px` }}
        >
          <ChevronRight
            className={cn(
              'h-4 w-4 shrink-0 transition-transform',
              isExpanded && 'rotate-90'
            )}
          />
          <FolderIcon className="h-4 w-4 shrink-0 text-blue-500" />
          <span className="truncate">{folder.name}</span>
        </button>
        {isExpanded && folder.children && (
          <div className="mt-0.5">
            {folder.children.map((child) => renderFolder(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-0.5">
      {folders.map((folder) => renderFolder(folder))}
    </div>
  );
}

