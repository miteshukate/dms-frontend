// Mock data for Document Management System
import type {
  User,
  FileItem,
  FolderNode,
  ActivityLog,
  WorkflowItem,
  StorageStats,
  Notification,
  Team,
  FileVersion
} from '@/lib/types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    role: 'admin',
    team: 'Engineering',
    lastActive: new Date('2026-02-23T10:30:00'),
    createdAt: new Date('2025-01-15'),
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    role: 'editor',
    team: 'Product',
    lastActive: new Date('2026-02-23T09:15:00'),
    createdAt: new Date('2025-01-20'),
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike.chen@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    role: 'editor',
    team: 'Engineering',
    lastActive: new Date('2026-02-22T16:45:00'),
    createdAt: new Date('2025-02-01'),
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.d@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    role: 'viewer',
    team: 'Marketing',
    lastActive: new Date('2026-02-23T08:00:00'),
    createdAt: new Date('2025-02-10'),
  },
  {
    id: '5',
    name: 'Alex Rivera',
    email: 'alex.r@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    role: 'viewer',
    team: 'Sales',
    lastActive: new Date('2026-02-21T14:20:00'),
    createdAt: new Date('2025-03-05'),
  },
];

export const currentUser = mockUsers[0];

// Mock Teams
export const mockTeams: Team[] = [
  {
    id: '1',
    name: 'Engineering',
    description: 'Software development team',
    members: [mockUsers[0], mockUsers[2]],
    createdAt: new Date('2025-01-01'),
  },
  {
    id: '2',
    name: 'Product',
    description: 'Product management and design',
    members: [mockUsers[1]],
    createdAt: new Date('2025-01-01'),
  },
  {
    id: '3',
    name: 'Marketing',
    description: 'Marketing and communications',
    members: [mockUsers[3]],
    createdAt: new Date('2025-01-01'),
  },
  {
    id: '4',
    name: 'Sales',
    description: 'Sales and business development',
    members: [mockUsers[4]],
    createdAt: new Date('2025-01-01'),
  },
];

// Mock Files
export const mockFiles: FileItem[] = [
  {
    id: 'f1',
    name: 'Q4 Financial Report.pdf',
    type: 'pdf',
    size: 2547896,
    owner: mockUsers[0],
    createdAt: new Date('2026-02-20T14:30:00'),
    modifiedAt: new Date('2026-02-22T09:15:00'),
    parentId: 'folder1',
    isFolder: false,
    isStarred: true,
    tags: ['finance', 'quarterly'],
    version: 3,
    path: '/Documents/Finance/Q4 Financial Report.pdf',
  },
  {
    id: 'f2',
    name: 'Product Roadmap 2026.docx',
    type: 'docx',
    size: 892456,
    owner: mockUsers[1],
    createdAt: new Date('2026-02-18T11:20:00'),
    modifiedAt: new Date('2026-02-23T08:45:00'),
    parentId: 'folder2',
    isFolder: false,
    isStarred: true,
    tags: ['product', 'roadmap'],
    version: 7,
    path: '/Documents/Product/Product Roadmap 2026.docx',
  },
  {
    id: 'f3',
    name: 'Team Budget.xlsx',
    type: 'xlsx',
    size: 456789,
    owner: mockUsers[0],
    createdAt: new Date('2026-02-15T10:00:00'),
    modifiedAt: new Date('2026-02-20T15:30:00'),
    parentId: 'folder1',
    isFolder: false,
    tags: ['finance', 'budget'],
    version: 2,
    path: '/Documents/Finance/Team Budget.xlsx',
  },
  {
    id: 'f4',
    name: 'Marketing Presentation.pptx',
    type: 'pptx',
    size: 8765432,
    owner: mockUsers[3],
    createdAt: new Date('2026-02-10T13:45:00'),
    modifiedAt: new Date('2026-02-19T16:20:00'),
    parentId: 'folder3',
    isFolder: false,
    tags: ['marketing', 'presentation'],
    version: 5,
    path: '/Documents/Marketing/Marketing Presentation.pptx',
  },
  {
    id: 'f5',
    name: 'API Documentation.pdf',
    type: 'pdf',
    size: 1234567,
    owner: mockUsers[2],
    createdAt: new Date('2026-02-08T09:00:00'),
    modifiedAt: new Date('2026-02-21T11:30:00'),
    parentId: 'folder4',
    isFolder: false,
    isStarred: true,
    tags: ['engineering', 'documentation'],
    version: 4,
    path: '/Documents/Engineering/API Documentation.pdf',
  },
  {
    id: 'f6',
    name: 'Company Logo.png',
    type: 'png',
    size: 234567,
    owner: mockUsers[3],
    createdAt: new Date('2026-01-25T14:00:00'),
    modifiedAt: new Date('2026-01-25T14:00:00'),
    parentId: 'folder5',
    isFolder: false,
    tags: ['branding', 'assets'],
    version: 1,
    path: '/Documents/Assets/Company Logo.png',
  },
  {
    id: 'f7',
    name: 'Sales Contract Template.docx',
    type: 'docx',
    size: 345678,
    owner: mockUsers[4],
    createdAt: new Date('2026-02-05T10:30:00'),
    modifiedAt: new Date('2026-02-18T13:45:00'),
    parentId: 'folder6',
    isFolder: false,
    tags: ['sales', 'legal', 'template'],
    version: 3,
    path: '/Documents/Sales/Sales Contract Template.docx',
  },
  {
    id: 'f8',
    name: 'Meeting Notes - Feb 2026.txt',
    type: 'txt',
    size: 12345,
    owner: mockUsers[1],
    createdAt: new Date('2026-02-23T09:00:00'),
    modifiedAt: new Date('2026-02-23T10:15:00'),
    parentId: null,
    isFolder: false,
    tags: ['notes'],
    version: 1,
    path: '/Meeting Notes - Feb 2026.txt',
  },
];

// Mock Folders
export const mockFolders: FolderNode[] = [
  {
    id: 'folder1',
    name: 'Finance',
    type: 'folder',
    size: 0,
    owner: mockUsers[0],
    createdAt: new Date('2025-12-01'),
    modifiedAt: new Date('2026-02-22'),
    parentId: 'root',
    isFolder: true,
    path: '/Documents/Finance',
  },
  {
    id: 'folder2',
    name: 'Product',
    type: 'folder',
    size: 0,
    owner: mockUsers[1],
    createdAt: new Date('2025-12-01'),
    modifiedAt: new Date('2026-02-23'),
    parentId: 'root',
    isFolder: true,
    path: '/Documents/Product',
  },
  {
    id: 'folder3',
    name: 'Marketing',
    type: 'folder',
    size: 0,
    owner: mockUsers[3],
    createdAt: new Date('2025-12-01'),
    modifiedAt: new Date('2026-02-19'),
    parentId: 'root',
    isFolder: true,
    path: '/Documents/Marketing',
  },
  {
    id: 'folder4',
    name: 'Engineering',
    type: 'folder',
    size: 0,
    owner: mockUsers[2],
    createdAt: new Date('2025-12-01'),
    modifiedAt: new Date('2026-02-21'),
    parentId: 'root',
    isFolder: true,
    path: '/Documents/Engineering',
  },
  {
    id: 'folder5',
    name: 'Assets',
    type: 'folder',
    size: 0,
    owner: mockUsers[3],
    createdAt: new Date('2025-12-01'),
    modifiedAt: new Date('2026-01-25'),
    parentId: 'root',
    isFolder: true,
    path: '/Documents/Assets',
  },
  {
    id: 'folder6',
    name: 'Sales',
    type: 'folder',
    size: 0,
    owner: mockUsers[4],
    createdAt: new Date('2025-12-01'),
    modifiedAt: new Date('2026-02-18'),
    parentId: 'root',
    isFolder: true,
    path: '/Documents/Sales',
  },
];

// Mock Activity Logs
export const mockActivityLogs: ActivityLog[] = [
  {
    id: 'a1',
    type: 'upload',
    user: mockUsers[1],
    file: mockFiles[7],
    description: 'uploaded Meeting Notes - Feb 2026.txt',
    timestamp: new Date('2026-02-23T09:00:00'),
  },
  {
    id: 'a2',
    type: 'approve',
    user: mockUsers[0],
    file: mockFiles[0],
    description: 'approved Q4 Financial Report.pdf',
    timestamp: new Date('2026-02-22T14:30:00'),
  },
  {
    id: 'a3',
    type: 'share',
    user: mockUsers[1],
    file: mockFiles[1],
    description: 'shared Product Roadmap 2026.docx with Engineering team',
    timestamp: new Date('2026-02-22T11:15:00'),
  },
  {
    id: 'a4',
    type: 'download',
    user: mockUsers[2],
    file: mockFiles[4],
    description: 'downloaded API Documentation.pdf',
    timestamp: new Date('2026-02-21T16:20:00'),
  },
  {
    id: 'a5',
    type: 'comment',
    user: mockUsers[3],
    file: mockFiles[3],
    description: 'commented on Marketing Presentation.pptx',
    timestamp: new Date('2026-02-21T10:45:00'),
  },
  {
    id: 'a6',
    type: 'permission_change',
    user: mockUsers[0],
    file: mockFiles[2],
    description: 'changed permissions for Team Budget.xlsx',
    timestamp: new Date('2026-02-20T15:30:00'),
  },
  {
    id: 'a7',
    type: 'rename',
    user: mockUsers[0],
    file: mockFiles[0],
    description: 'renamed file to Q4 Financial Report.pdf',
    timestamp: new Date('2026-02-20T14:15:00'),
  },
];

// Mock Workflow Items
export const mockWorkflowItems: WorkflowItem[] = [
  {
    id: 'w1',
    file: mockFiles[0],
    status: 'approved',
    requestedBy: mockUsers[1],
    requestedAt: new Date('2026-02-20T10:00:00'),
    approvers: [mockUsers[0]],
    currentApprover: mockUsers[0],
    dueDate: new Date('2026-02-25'),
    comments: [
      {
        id: 'c1',
        user: mockUsers[0],
        content: 'Numbers look good. Approved for distribution.',
        createdAt: new Date('2026-02-22T14:30:00'),
      },
    ],
  },
  {
    id: 'w2',
    file: mockFiles[1],
    status: 'in_review',
    requestedBy: mockUsers[1],
    requestedAt: new Date('2026-02-22T09:00:00'),
    approvers: [mockUsers[0], mockUsers[2]],
    currentApprover: mockUsers[0],
    dueDate: new Date('2026-02-28'),
    comments: [
      {
        id: 'c2',
        user: mockUsers[2],
        content: 'Please review the Q3 milestones section.',
        createdAt: new Date('2026-02-23T08:45:00'),
      },
    ],
  },
  {
    id: 'w3',
    file: mockFiles[3],
    status: 'pending',
    requestedBy: mockUsers[3],
    requestedAt: new Date('2026-02-19T14:00:00'),
    approvers: [mockUsers[0], mockUsers[1]],
    currentApprover: mockUsers[0],
    dueDate: new Date('2026-02-26'),
  },
  {
    id: 'w4',
    file: mockFiles[6],
    status: 'rejected',
    requestedBy: mockUsers[4],
    requestedAt: new Date('2026-02-18T11:00:00'),
    approvers: [mockUsers[0]],
    currentApprover: mockUsers[0],
    dueDate: new Date('2026-02-24'),
    comments: [
      {
        id: 'c3',
        user: mockUsers[0],
        content: 'Legal review required. Please update terms and conditions section.',
        createdAt: new Date('2026-02-19T09:30:00'),
      },
    ],
  },
];

// Mock Storage Stats
export const mockStorageStats: StorageStats = {
  used: 47234567890, // ~47GB
  total: 107374182400, // 100GB
  fileCount: 1247,
  folderCount: 89,
  sharedCount: 234,
  recentUploads: 47,
};

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'success',
    title: 'Document Approved',
    message: 'Q4 Financial Report.pdf has been approved',
    read: false,
    createdAt: new Date('2026-02-22T14:30:00'),
    actionUrl: '/files/f1',
  },
  {
    id: 'n2',
    type: 'info',
    title: 'New Comment',
    message: 'Mike Chen commented on Product Roadmap 2026.docx',
    read: false,
    createdAt: new Date('2026-02-23T08:45:00'),
    actionUrl: '/files/f2',
  },
  {
    id: 'n3',
    type: 'warning',
    title: 'Approval Pending',
    message: 'Marketing Presentation.pptx is awaiting your approval',
    read: true,
    createdAt: new Date('2026-02-19T14:00:00'),
    actionUrl: '/workflow/w3',
  },
  {
    id: 'n4',
    type: 'info',
    title: 'File Shared',
    message: 'Sarah Johnson shared Product Roadmap 2026.docx with you',
    read: true,
    createdAt: new Date('2026-02-22T11:15:00'),
    actionUrl: '/files/f2',
  },
];

// Mock File Versions
export const mockFileVersions: Record<string, FileVersion[]> = {
  f1: [
    {
      id: 'v1-3',
      fileId: 'f1',
      version: 3,
      size: 2547896,
      uploadedBy: mockUsers[0],
      uploadedAt: new Date('2026-02-22T09:15:00'),
      comment: 'Final version with Q4 corrections',
    },
    {
      id: 'v1-2',
      fileId: 'f1',
      version: 2,
      size: 2523456,
      uploadedBy: mockUsers[0],
      uploadedAt: new Date('2026-02-21T14:30:00'),
      comment: 'Updated revenue figures',
    },
    {
      id: 'v1-1',
      fileId: 'f1',
      version: 1,
      size: 2498765,
      uploadedBy: mockUsers[1],
      uploadedAt: new Date('2026-02-20T14:30:00'),
      comment: 'Initial draft',
    },
  ],
};

// Helper function to format file sizes
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Helper function to format dates
export function formatDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  });
}

// Helper function to get file icon color
export function getFileTypeColor(type: string): string {
  const colors: Record<string, string> = {
    pdf: 'text-red-500',
    doc: 'text-blue-500',
    docx: 'text-blue-500',
    xls: 'text-green-500',
    xlsx: 'text-green-500',
    ppt: 'text-orange-500',
    pptx: 'text-orange-500',
    txt: 'text-gray-500',
    csv: 'text-green-500',
    jpg: 'text-purple-500',
    png: 'text-purple-500',
    gif: 'text-purple-500',
    zip: 'text-yellow-500',
    folder: 'text-blue-500',
  };
  return colors[type] || 'text-gray-500';
}

