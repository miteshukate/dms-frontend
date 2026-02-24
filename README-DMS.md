# Enterprise Document Management System (DMS) UI

A modern, production-ready SaaS Document Management System built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

### Core Features
- **Dashboard** - Storage analytics, recent activity, and quick actions
- **File Explorer** - Browse files with table/grid view toggle, folder tree navigation
- **File Preview** - Document viewer with version history and comments
- **Upload & Download** - Drag-and-drop upload, bulk download capabilities
- **Multi-select Actions** - Bulk operations on multiple files

### Collaboration
- **Permissions Management** - Role-based access control (Owner, Editor, Viewer, Commenter)
- **External Sharing** - Generate secure links with expiry and password protection
- **Comments & Feedback** - Add comments to documents
- **User & Team Management** - Organize users into teams

### Workflow
- **Approval System** - Document approval workflow with request/approve/reject
- **Activity Timeline** - Track all file activities and changes
- **Notifications** - Real-time notifications for important events
- **Audit Trail** - Complete activity logging

### Enterprise Features
- **Version History** - Track and restore previous versions
- **Search & Filters** - Advanced search with multiple filters
- **Storage Management** - Storage usage tracking and quota management
- **Admin Settings** - System-wide configuration and security settings
- **Dark Mode** - Full dark mode support

## 📁 Project Structure

```
vdr-frontend/
├── src/
│   ├── components/
│   │   ├── dms/                      # DMS-specific components
│   │   │   ├── activity-timeline.tsx # Activity feed component
│   │   │   ├── dms-header.tsx       # Top navigation bar
│   │   │   ├── dms-sidebar.tsx      # Left sidebar navigation
│   │   │   ├── file-grid.tsx        # Grid view for files
│   │   │   ├── file-table.tsx       # Table view for files
│   │   │   ├── file-tree-navigation.tsx # Folder tree
│   │   │   ├── stats-widget.tsx     # Dashboard statistics
│   │   │   └── user-avatar-group.tsx # User avatar stacks
│   │   └── ui/                       # shadcn/ui components
│   ├── pages/
│   │   ├── dashboard.tsx            # Main dashboard page
│   │   ├── file-explorer.tsx       # File browser page
│   │   ├── file-preview.tsx        # Document preview page
│   │   ├── permissions.tsx         # Permissions management
│   │   ├── workflow-approval.tsx   # Approval workflow page
│   │   ├── admin-users.tsx         # User management page
│   │   ├── shared-files.tsx        # Shared documents
│   │   ├── starred-files.tsx       # Favorite files
│   │   ├── recent-files.tsx        # Recent activity
│   │   └── settings.tsx            # System settings
│   ├── layouts/
│   │   └── dms-layout.tsx          # Main layout wrapper
│   ├── lib/
│   │   ├── types/
│   │   │   └── index.ts            # TypeScript type definitions
│   │   ├── mock-data.ts            # Mock data for development
│   │   └── utils.ts                # Utility functions
│   ├── App-DMS.tsx                 # Main app with routing
│   └── main.tsx                    # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo/Blue tones
- **Background**: Clean white/dark backgrounds
- **Accents**: Soft shadows, rounded corners
- **Status Colors**:
  - Success: Green
  - Warning: Yellow
  - Error: Red
  - Info: Blue

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable 14-16px text
- **Labels**: 12-13px muted foreground

### Components Used
- Cards, Tables, Dialogs, Dropdowns
- Avatars, Badges, Progress bars
- Tabs, Select, Switch, Input
- Breadcrumbs, Tooltips, Separators

## 📄 Pages Overview

### 1. Dashboard (`/`)
- Storage usage statistics
- Recent activity timeline
- Quick action shortcuts
- Recent files table

### 2. File Explorer (`/files`)
- Folder tree navigation
- Table/Grid view toggle
- Multi-select with bulk actions
- Sort and filter options
- Breadcrumb navigation

### 3. File Preview (`/files/:fileId`)
- Document preview area
- File details sidebar
- Version history
- Comments section
- Download and share actions

### 4. Permissions Management (`/permissions`)
- User access management
- Role assignment (Owner, Editor, Viewer, Commenter)
- External link generation
- Link expiry and password protection
- Access analytics

### 5. Workflow Approval (`/workflow`)
- Approval queue
- Request details
- Approve/Reject with comments
- Status tracking
- Due date management

### 6. Admin - Users & Teams (`/admin/users`)
- User listing and search
- Role management
- Team creation and management
- User invitation system
- Activity monitoring

### 7. Admin - Settings (`/admin/settings`)
- General workspace settings
- Notification preferences
- Security configuration
- Storage and retention policies

### 8. Shared with Me (`/shared`)
- Files shared by others
- Shared file listing

### 9. Starred Files (`/starred`)
- Favorite/bookmarked files
- Quick access to important docs

### 10. Recent Files (`/recent`)
- Recently accessed documents
- Activity-based sorting

## 🔧 Technical Stack

- **React 19.2** - UI framework
- **TypeScript** - Type safety
- **React Router v7** - Client-side routing
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icon system
- **Sonner** - Toast notifications
- **Vite** - Build tool

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Development Server
The app will be available at `http://localhost:5173`

## 🗺️ Navigation Structure

```
Main Navigation (Sidebar):
├── Dashboard (/)
├── My Files (/files)
├── Shared with me (/shared)
├── Recent (/recent)
├── Starred (/starred)
├── Workflow
│   └── Approvals (/workflow)
└── Administration
    ├── Users & Teams (/admin/users)
    └── Settings (/admin/settings)
```

## 📊 Mock Data

The application includes comprehensive mock data for demonstration:
- 5 Users with different roles
- 8 Files with metadata
- 6 Folders with hierarchy
- 4 Workflow items
- Activity logs
- File versions
- Notifications
- Teams

All mock data is located in `src/lib/mock-data.ts`

## 🎯 Key Components

### DMS Header
- Global search bar
- Upload button
- Notifications dropdown
- User profile menu
- Dark mode toggle

### DMS Sidebar
- Collapsible navigation
- Active route highlighting
- Storage usage indicator
- Logo and branding

### File Table
- Sortable columns
- Multi-select checkboxes
- Context menu actions
- Owner avatars
- Status indicators

### File Grid
- Card-based layout
- Hover effects
- Quick actions
- Responsive design

### Activity Timeline
- Chronological activity feed
- User avatars
- Activity type icons
- Timestamp formatting

## 🔐 Permission Levels

1. **Owner** - Full control, can delete
2. **Can Edit** - View and modify files
3. **Can View** - Read-only access
4. **Can Comment** - View and add comments

## 🎨 UI/UX Features

- **Responsive Design** - Works on desktop and tablet
- **Empty States** - Helpful messages when no content
- **Loading States** - Skeleton loaders for async operations
- **Error Handling** - User-friendly error messages
- **Keyboard Navigation** - Accessible shortcuts
- **Hover Effects** - Interactive feedback
- **Smooth Transitions** - Polished animations

## 🔄 Workflow States

- **Pending** - Awaiting review
- **In Review** - Currently being reviewed
- **Approved** - Accepted and approved
- **Rejected** - Declined with feedback

## 📝 File Type Support

Supported file types with custom icons:
- Documents: PDF, DOC, DOCX, TXT
- Spreadsheets: XLS, XLSX, CSV
- Presentations: PPT, PPTX
- Images: JPG, PNG, GIF
- Archives: ZIP
- Folders

## 🌙 Dark Mode

Full dark mode support with:
- Automatic system detection
- Manual toggle in user menu
- Persistent preferences
- Proper contrast ratios

## 🚀 Performance Optimizations

- Code splitting by route
- Lazy loading of components
- Memoized calculations
- Optimized re-renders
- Efficient state management

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Future Enhancements

Potential features to add:
- Real-time collaboration
- Advanced search with filters
- Drag-and-drop file organization
- Batch operations
- Export capabilities
- Integration APIs
- Mobile app
- Offline support

## 🤝 Contributing

This is a demo/template project. Feel free to use and modify as needed.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

Built as a comprehensive example of a modern enterprise DMS interface.

---

**Note**: This is a frontend-only implementation with mock data. To make it production-ready, you'll need to:
1. Connect to a backend API
2. Implement authentication
3. Add real file upload/download
4. Implement actual permission system
5. Add database integration
6. Implement real-time features
7. Add comprehensive error handling
8. Implement proper state management (Redux/Zustand)

