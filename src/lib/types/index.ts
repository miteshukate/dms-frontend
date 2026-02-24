// Type definitions for Document Management System

export type FileType = 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'txt' | 'csv' | 'jpg' | 'png' | 'gif' | 'zip' | 'folder';

export type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';

export type PermissionLevel = 'owner' | 'can_edit' | 'can_view' | 'can_comment';

export type WorkflowStatus = 'pending' | 'approved' | 'rejected' | 'in_review';

export type ActivityType =
  | 'upload'
  | 'download'
  | 'share'
  | 'delete'
  | 'rename'
  | 'move'
  | 'comment'
  | 'approve'
  | 'reject'
  | 'permission_change';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  team?: string;
  lastActive?: Date;
  createdAt: Date;
}

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size: number;
  owner: User;
  createdAt: Date;
  modifiedAt: Date;
  parentId: string | null;
  isFolder: boolean;
  isStarred?: boolean;
  tags?: string[];
  sharedWith?: SharedPermission[];
  version?: number;
  path?: string;
  previewUrl?: string;
}

export interface FolderNode extends FileItem {
  isFolder: true;
  children?: FolderNode[];
  isExpanded?: boolean;
}

export interface SharedPermission {
  userId: string;
  user: User;
  permission: PermissionLevel;
  sharedAt: Date;
  sharedBy: User;
  expiresAt?: Date;
}

export interface ExternalLink {
  id: string;
  fileId: string;
  url: string;
  permission: 'view' | 'edit';
  password?: boolean;
  expiresAt?: Date;
  createdBy: User;
  createdAt: Date;
  accessCount: number;
}

export interface WorkflowItem {
  id: string;
  file: FileItem;
  status: WorkflowStatus;
  requestedBy: User;
  requestedAt: Date;
  approvers: User[];
  currentApprover?: User;
  comments?: WorkflowComment[];
  dueDate?: Date;
}

export interface WorkflowComment {
  id: string;
  user: User;
  content: string;
  createdAt: Date;
}

export interface ActivityLog {
  id: string;
  type: ActivityType;
  user: User;
  file?: FileItem;
  description: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface StorageStats {
  used: number;
  total: number;
  fileCount: number;
  folderCount: number;
  sharedCount: number;
  recentUploads: number;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  members: User[];
  createdAt: Date;
}

export interface FileVersion {
  id: string;
  fileId: string;
  version: number;
  size: number;
  uploadedBy: User;
  uploadedAt: Date;
  comment?: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

