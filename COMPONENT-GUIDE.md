# DMS Component Usage Guide

## Quick Reference for Using DMS Components

### File Table Component

```tsx
import { FileTable } from '@/components/dms/file-table';

<FileTable
  files={fileArray}
  selectedFiles={selectedSet}
  onSelectFiles={(ids) => setSelectedFiles(ids)}
  onFileClick={(file) => navigate(`/files/${file.id}`)}
  onFileAction={(action, fileId) => handleAction(action, fileId)}
/>
```

**Props:**
- `files`: Array of FileItem objects
- `selectedFiles`: Set of selected file IDs (optional)
- `onSelectFiles`: Callback when selection changes
- `onFileClick`: Callback when file is clicked
- `onFileAction`: Callback for dropdown actions

**Features:**
- Sortable columns (name, date, size)
- Multi-select with checkboxes
- Context menu with actions
- Owner avatars
- File type icons

---

### File Grid Component

```tsx
import { FileGrid } from '@/components/dms/file-grid';

<FileGrid
  files={fileArray}
  selectedFiles={selectedSet}
  onSelectFiles={(ids) => setSelectedFiles(ids)}
  onFileClick={(file) => navigate(`/files/${file.id}`)}
  onFileAction={(action, fileId) => handleAction(action, fileId)}
/>
```

**Props:** Same as FileTable

**Features:**
- Card-based grid layout
- Hover effects
- File type icons with colors
- Empty states

---

### File Tree Navigation

```tsx
import { FileTreeNavigation } from '@/components/dms/file-tree-navigation';

<FileTreeNavigation
  folders={folderArray}
  selectedId={currentFolderId}
  onSelect={(id) => setCurrentFolder(id)}
/>
```

**Props:**
- `folders`: Array of FolderNode objects
- `selectedId`: Currently selected folder ID
- `onSelect`: Callback when folder is clicked

**Features:**
- Collapsible folder tree
- Active folder highlighting
- Nested folder support

---

### Activity Timeline

```tsx
import { ActivityTimeline } from '@/components/dms/activity-timeline';

<ActivityTimeline
  activities={activityArray}
  maxItems={10}
/>
```

**Props:**
- `activities`: Array of ActivityLog objects
- `maxItems`: Maximum items to display (optional)

**Features:**
- Chronological activity feed
- Activity type icons
- User avatars
- Relative timestamps

---

### Stats Widget

```tsx
import { StatsWidget } from '@/components/dms/stats-widget';

<StatsWidget
  title="Total Files"
  value={1247}
  change={{ value: 12, label: "from last month" }}
  icon={FileText}
  trend="up"
/>
```

**Props:**
- `title`: Widget title
- `value`: Display value (string or number)
- `change`: Optional change indicator
- `icon`: Lucide icon component
- `trend`: 'up' | 'down' | 'neutral'

---

### User Avatar Group

```tsx
import { UserAvatarGroup } from '@/components/dms/user-avatar-group';

<UserAvatarGroup
  users={userArray}
  max={3}
  size="md"
/>
```

**Props:**
- `users`: Array of User objects
- `max`: Maximum avatars to show before "+N" (default: 3)
- `size`: 'sm' | 'md' | 'lg'

**Features:**
- Overlapping avatars
- Overflow indicator
- Tooltips with user info

---

### DMS Layout

```tsx
import { DMSLayout } from '@/layouts/dms-layout';

<DMSLayout>
  {/* Your page content */}
</DMSLayout>
```

**Features:**
- Sidebar with navigation
- Header with search, upload, notifications
- Upload modal
- Responsive layout

---

### DMS Sidebar

```tsx
import { DMSSidebar } from '@/components/dms/dms-sidebar';

<DMSSidebar />
```

**Features:**
- Navigation menu
- Active route highlighting
- Storage indicator
- Collapsible

---

### DMS Header

```tsx
import { DMSHeader } from '@/components/dms/dms-header';

<DMSHeader
  onUploadClick={() => setModalOpen(true)}
  onSearchSubmit={(query) => handleSearch(query)}
/>
```

**Props:**
- `onUploadClick`: Callback for upload button
- `onSearchSubmit`: Callback for search

**Features:**
- Global search
- Upload button
- Notifications dropdown
- User menu with dark mode toggle

---

## Type Definitions

### FileItem
```typescript
interface FileItem {
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
}
```

### User
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'editor' | 'viewer' | 'guest';
  team?: string;
  lastActive?: Date;
  createdAt: Date;
}
```

### ActivityLog
```typescript
interface ActivityLog {
  id: string;
  type: 'upload' | 'download' | 'share' | 'delete' | 'rename' | 'move' | 'comment' | 'approve' | 'reject' | 'permission_change';
  user: User;
  file?: FileItem;
  description: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}
```

### WorkflowItem
```typescript
interface WorkflowItem {
  id: string;
  file: FileItem;
  status: 'pending' | 'in_review' | 'approved' | 'rejected';
  requestedBy: User;
  requestedAt: Date;
  approvers: User[];
  currentApprover?: User;
  comments?: WorkflowComment[];
  dueDate?: Date;
}
```

---

## Utility Functions

### Format File Size
```typescript
import { formatFileSize } from '@/lib/mock-data';

formatFileSize(1234567); // "1.18 MB"
```

### Format Date
```typescript
import { formatDate } from '@/lib/mock-data';

formatDate(new Date()); // "Just now" or "5m ago" or "Feb 23"
```

### Get File Type Color
```typescript
import { getFileTypeColor } from '@/lib/mock-data';

getFileTypeColor('pdf'); // "text-red-500"
```

---

## Navigation Routes

```typescript
/ - Dashboard
/files - File Explorer
/files/:fileId - File Preview
/shared - Shared Files
/starred - Starred Files
/recent - Recent Files
/permissions?fileId=xxx - Permissions Management
/workflow - Workflow Approvals
/admin/users - User Management
/admin/settings - Settings
```

---

## Mock Data Access

```typescript
import {
  mockUsers,
  mockFiles,
  mockFolders,
  mockActivityLogs,
  mockWorkflowItems,
  mockStorageStats,
  mockNotifications,
  mockTeams,
  mockFileVersions,
  currentUser,
} from '@/lib/mock-data';
```

---

## Styling Tips

### Card with Header
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Button Variants
```tsx
<Button>Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button size="sm">Small</Button>
<Button size="icon">Icon Only</Button>
```

### Badge Variants
```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

---

## Common Patterns

### File Actions Handler
```typescript
const handleFileAction = (action: string, fileId: string) => {
  switch (action) {
    case 'preview':
      navigate(`/files/${fileId}`);
      break;
    case 'download':
      // Download logic
      break;
    case 'share':
      navigate(`/permissions?fileId=${fileId}`);
      break;
    case 'delete':
      // Delete confirmation
      break;
  }
};
```

### Multi-Select State
```typescript
const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());

// Select all
setSelectedFiles(new Set(files.map(f => f.id)));

// Clear selection
setSelectedFiles(new Set());

// Toggle selection
const toggleSelection = (id: string) => {
  const newSet = new Set(selectedFiles);
  if (newSet.has(id)) {
    newSet.delete(id);
  } else {
    newSet.add(id);
  }
  setSelectedFiles(newSet);
};
```

### Dialog Pattern
```typescript
const [isOpen, setIsOpen] = useState(false);

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Icons Usage

```tsx
import { FileText, Folder, Download, Share2, Trash2 } from 'lucide-react';

<FileText className="h-4 w-4" />
<Folder className="h-5 w-5 text-blue-500" />
```

Common icons:
- **Files**: FileText, File, FileSpreadsheet, FileImage, Presentation
- **Actions**: Download, Upload, Share2, Trash2, Edit, Eye, Copy
- **Navigation**: Home, FolderOpen, Star, Clock, Settings
- **Status**: CheckCircle, XCircle, AlertCircle, Clock
- **Users**: User, Users, Crown, Shield

---

This guide provides quick reference for working with the DMS components and common patterns used throughout the application.

