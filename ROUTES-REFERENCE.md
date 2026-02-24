# 🗺️ DMS Route Reference

## Quick Navigation Guide

### 🌐 Base URL
```
http://localhost:5175
```

---

## 📍 All Application Routes

### Main Navigation

| Route | Page | Description |
|-------|------|-------------|
| `/` | Dashboard | Main overview with stats, activity, and quick actions |
| `/files` | File Explorer | Browse all files with folder tree navigation |
| `/files/:fileId` | File Preview | View file details, versions, and comments |
| `/shared` | Shared Files | Files shared with you by others |
| `/starred` | Starred Files | Your favorite/bookmarked documents |
| `/recent` | Recent Files | Recently accessed documents |

### Workflow

| Route | Page | Description |
|-------|------|-------------|
| `/workflow` | Workflow Approval | Review and approve document requests |

### Administration

| Route | Page | Description |
|-------|------|-------------|
| `/admin/users` | Users & Teams | Manage users, roles, and teams |
| `/admin/settings` | Settings | Configure system preferences |

### Special Routes

| Route | Type | Description |
|-------|------|-------------|
| `/permissions?fileId=xxx` | Query Param | Manage permissions for specific file |
| `*` | Catch-all | Redirects to Dashboard |

---

## 🔗 Direct Links (Copy & Paste)

### Main Pages
```
http://localhost:5175/                    # Dashboard
http://localhost:5175/files               # File Explorer
http://localhost:5175/shared              # Shared Files
http://localhost:5175/starred             # Starred Files
http://localhost:5175/recent              # Recent Files
http://localhost:5175/workflow            # Approvals
http://localhost:5175/admin/users         # User Management
http://localhost:5175/admin/settings      # Settings
```

### Example Deep Links
```
http://localhost:5175/files/f1            # Preview Q4 Financial Report
http://localhost:5175/files/f2            # Preview Product Roadmap
http://localhost:5175/permissions?fileId=f1  # Permissions for file f1
```

---

## 🧭 Navigation Patterns

### Sidebar Navigation
Click any menu item in the left sidebar to navigate instantly.

### Programmatic Navigation
All clickable elements use React Router navigation:
- File names → Preview page
- Share buttons → Permissions page
- Workflow items → Preview page
- Quick actions → Relevant pages

### Breadcrumb Navigation
Use breadcrumbs at the top to navigate back through hierarchy.

---

## 🎯 Common User Journeys

### Journey 1: Upload & Share File
```
Dashboard → Click "Upload" → Select files → 
Go to "My Files" → Click file → Click "Share" → 
Add users → Done
```

### Journey 2: Review & Approve Document
```
Dashboard → Click "Approvals" → Select document → 
Review details → Click "Approve" → Add comment → Done
```

### Journey 3: Manage User Access
```
Dashboard → "Users & Teams" → View users → 
Click "Invite User" → Enter details → Send invitation
```

### Journey 4: Find & Preview File
```
Dashboard → "My Files" → Navigate folders → 
Click file → View details & versions → Download
```

---

## 📊 Route Parameters

### Dynamic Routes
```typescript
/files/:fileId
```
- `:fileId` - Unique identifier for the file
- Example: `/files/f1`, `/files/f2`

### Query Parameters
```typescript
/permissions?fileId=xxx
```
- `fileId` - File ID to manage permissions for
- Example: `/permissions?fileId=f1`

---

## 🔄 Navigation Methods

### 1. Sidebar Links
Click menu items in left sidebar (React Router Link components)

### 2. Button Clicks
Buttons use `useNavigate()` hook for programmatic navigation

### 3. Table/Card Clicks
File items navigate to preview page on click

### 4. Breadcrumbs
Click breadcrumb segments to navigate back

### 5. Back Buttons
Many pages have "← Back" buttons

---

## 🎨 Active Route Highlighting

The sidebar automatically highlights the current page:
- Dashboard: Highlighted when at `/`
- My Files: Highlighted when at `/files`
- Approvals: Highlighted when at `/workflow`
- etc.

Uses `useLocation()` hook from React Router for detection.

---

## 🚀 Testing Routes

### Quick Test All Routes:
```bash
# Open each route in browser
open http://localhost:5175/
open http://localhost:5175/files
open http://localhost:5175/files/f1
open http://localhost:5175/shared
open http://localhost:5175/starred
open http://localhost:5175/recent
open http://localhost:5175/workflow
open http://localhost:5175/admin/users
open http://localhost:5175/admin/settings
open http://localhost:5175/permissions?fileId=f1
```

Or simply navigate using the sidebar menu! 🎯

---

## 📱 URL Structure Best Practices

### Current Structure (RESTful)
```
/                          # Dashboard (root)
/files                     # Collection
/files/:id                 # Resource detail
/permissions               # Action/feature
/workflow                  # Feature
/admin/users               # Nested admin section
/admin/settings            # Nested admin section
```

### Benefits
- ✅ Clean URLs
- ✅ Bookmarkable
- ✅ Shareable
- ✅ SEO-friendly
- ✅ Intuitive structure

---

## 🎯 Route Access Control (Future)

When adding authentication, you might want:

```typescript
// Protected routes (require auth)
- All routes except login

// Admin routes (require admin role)
- /admin/*

// Role-based routes
- Viewers: Can access /files, /shared, /starred, /recent
- Editors: + /upload functionality
- Admins: + /admin/*, /workflow
```

---

## 🔗 API Route Mapping (Future)

When connecting to backend:

```typescript
// Frontend Route → Backend API
/files              → GET /api/files
/files/:id          → GET /api/files/:id
/permissions        → GET/POST /api/permissions
/workflow           → GET /api/workflows
/admin/users        → GET /api/users
```

---

## 🎉 Start Exploring!

### Open your browser:
# http://localhost:5175/

Click through all the routes using the sidebar menu and see your complete Enterprise DMS in action! 🚀

---

**All routes are live and ready to use!** ✨

