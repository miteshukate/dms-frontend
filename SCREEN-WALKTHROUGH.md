# 🎬 Screen-by-Screen Walkthrough

## 🏠 Screen 1: Dashboard

**Route:** `/`

**What you'll see:**
- 4 stat cards showing: Storage (47GB), Files (1,247), Folders (89), Shared (234)
- Storage overview card with progress bar (47% used)
- Recent Activity timeline on the left with 6 recent actions
- Quick Actions panel with 4 clickable cards (Upload, Create Folder, Share, Approvals)
- Recent Files table showing last 5 files with owner avatars
- Activity This Week section with upload/share/star counts

**Key interactions:**
- Click stat cards to navigate to related pages
- Click "View all" links to see more
- Click quick action cards to perform actions
- Click files in table to preview them

---

## 📁 Screen 2: File Explorer

**Route:** `/files`

**What you'll see:**
- Left sidebar with collapsible folder tree (Finance, Product, Marketing, etc.)
- Breadcrumb navigation at top
- Main toolbar with file count badge
- View toggle buttons (Table/Grid)
- Filter and Sort buttons
- File listing in current view
- When files selected: Bulk action toolbar (Download, Share, Delete)
- Bottom section with weekly activity stats

**Key interactions:**
- Click folders in tree to navigate
- Toggle between table and grid view
- Select files with checkboxes
- Click "..." menu for file actions (Preview, Download, Share, Rename, Delete)
- Click file name to open preview
- Use bulk actions on selected files

**Layout:**
```
[Folder Tree] | [File View (Table or Grid)]
     240px    |      Flexible width
```

---

## 👁️ Screen 3: File Preview

**Route:** `/files/:fileId`

**What you'll see:**
- Back button to return to files
- File name with star icon
- Metadata row (Owner, Modified date, Size, Version)
- Action buttons (Download, Share, More menu)
- Large preview area (with placeholder since no real file)
- Right sidebar with:
  - File Details card (Type, Size, Owner, Dates, Location, Tags)
  - Comments card with add button
- Bottom section: Version History with download buttons for each version

**Key interactions:**
- Click star to favorite/unfavorite
- Click Download to get file
- Click Share to manage permissions
- Add comments with button
- Download specific versions
- Navigate between versions

---

## 🔐 Screen 4: Permissions Management

**Route:** `/permissions?fileId=xxx`

**What you'll see:**
- Back button to files
- Page title with current file name
- Two tabs: "People" and "Share Links"

**People Tab:**
- Owner section at top (with Crown badge)
- List of shared users with avatars
- Permission dropdown for each user (Can Edit, Can View, Can Comment)
- Remove button (X) for each user
- "Add People" button opens dialog
- Permission Levels guide card explaining each role

**Share Links Tab:**
- Table showing existing share links
- Columns: Link URL, Permission, Created, Expires, Views, Actions
- Copy and Delete buttons for each link
- "Create Link" button opens dialog with:
  - Permission selector (View/Edit)
  - Expiry dropdown (1 day, 7 days, 30 days, Never)
  - Password protection toggle
  - Password input (if enabled)

**Key interactions:**
- Change user permissions with dropdown
- Remove users with X button
- Add people via dialog
- Create share links with options
- Copy links to clipboard

---

## ✅ Screen 5: Workflow Approval

**Route:** `/workflow`

**What you'll see:**
- Page header
- 4 stat cards: Pending (1), In Review (1), Approved (1), Rejected (1)
- Two-column layout:

**Left Column - Approval Queue:**
- Table with columns: Document, Requested By, Due Date, Status, Actions
- Status badges with icons (⏱ Pending, ⚠️ In Review, ✓ Approved, ✗ Rejected)
- View button for each item
- Click row to select and show details

**Right Column - Workflow Details:**
- Selected document info
- Status badge
- Requested by (user avatar + name + date)
- Due date
- List of approvers
- Comments section
- Action buttons: [Approve] [Reject] [Preview Document]

**Dialogs:**
- Approve dialog with optional comment textarea
- Reject dialog with required reason textarea

**Key interactions:**
- Click row in queue to see details
- Click Approve/Reject to open dialog
- Add comments when approving/rejecting
- Preview document before deciding

---

## 👥 Screen 6: Admin - Users & Teams

**Route:** `/admin/users`

**What you'll see:**
- Page header
- 4 stat cards: Total Users (5), Admins (1), Teams (4), Active Today (3)
- Two tabs: "Users" and "Teams"

**Users Tab:**
- Search bar with filter button
- User table with columns: User, Role, Team, Last Active, Joined, Actions
- User avatars with name and email
- Role badges with colors (Admin=red, Editor=blue, Viewer=gray, Guest=yellow)
- "..." menu for each user (Edit, Change Role, Send Reset Email, Remove)
- "Invite User" button opens dialog

**Teams Tab:**
- Grid of team cards (2 columns)
- Each card shows: Team name, Description, Member count, Avatar stack, Created date
- "..." menu on each card (Edit, Add Members, Delete)
- "Create Team" button opens dialog

**Dialogs:**
- Invite User: Email, Name, Role selector, Team selector (optional)
- Create Team: Name, Description

**Key interactions:**
- Search users by name or email
- Change user roles
- Invite new users
- Create and manage teams
- View team members

---

## ⚙️ Screen 7: Settings

**Route:** `/admin/settings`

**What you'll see:**
- Page header
- 4 tabs: General, Notifications, Security, Storage

**General Tab:**
- Workspace Name input
- Default File View selector (Table/Grid)
- Dark Mode switch
- Compact View switch
- Save Changes button

**Notifications Tab:**
- Email Notifications switch
- File Upload Notifications switch
- Share Notifications switch
- Workflow Notifications switch
- Comment Notifications switch
- Save Preferences button

**Security Tab:**
- Two-Factor Authentication switch
- Require Password for Shared Links switch
- Default Link Expiry selector
- Audit Logging switch
- Save Settings button

**Storage Tab:**
- File Retention Period selector
- Version History Limit selector
- Auto-cleanup switch
- Save Settings button

**Key interactions:**
- Toggle switches for various features
- Select dropdown options
- Save changes with button

---

## 🔗 Screen 8: Shared Files

**Route:** `/shared`

**What you'll see:**
- Page header "Shared with Me"
- Single card with Share2 icon
- File count
- Table of files shared by others
- Same table format as File Explorer

**Key interactions:**
- Click files to preview
- Use file actions from "..." menu

---

## ⭐ Screen 9: Starred Files

**Route:** `/starred`

**What you'll see:**
- Page header "Starred Files"
- Single card with Star icon (yellow)
- File count
- Table of starred/favorite files

**Key interactions:**
- Click files to preview
- Unstar from preview page

---

## 🕐 Screen 10: Recent Files

**Route:** `/recent`

**What you'll see:**
- Page header "Recent Files"
- Single card with Clock icon
- Count of recent files (last 20)
- Table sorted by modification date

**Key interactions:**
- Click files to preview
- See recently accessed documents

---

## 🎯 Common UI Elements Across All Screens

### Header (Present on all pages)
```
[☰ Sidebar Toggle] | [🔍 Search Bar...........] | [⬆ Upload] [🔔 Notifications] [👤 User Menu]
```

### Sidebar (Present on all pages)
```
📁 DocuVault
───────────
🏠 Dashboard (active indicator when on page)
📁 My Files
🔗 Shared
🕐 Recent
⭐ Starred
───────────
🔀 Approvals
───────────
👥 Users/Teams
⚙️ Settings
```

### Common Components
- **Cards**: White background, subtle border, rounded corners, shadow on hover
- **Buttons**: Primary (blue), Outline (border), Ghost (transparent)
- **Badges**: Colored pills for status/roles
- **Avatars**: Circular with fallback initials
- **Tables**: Striped rows, sortable headers, hover effects
- **Dialogs**: Centered modal with backdrop
- **Dropdowns**: Smooth animation, icon + text items

---

## 🎨 Visual Design Principles Used

### Spacing
- **Consistent gaps**: 4px, 8px, 12px, 16px, 24px
- **Card padding**: 24px (p-6)
- **Section spacing**: 24px (gap-6)

### Colors
- **Backgrounds**: White (light), Dark gray (dark)
- **Text**: Black (light), White (dark)
- **Primary**: Indigo/Blue (#4F46E5)
- **Muted**: Gray (#71717A)

### Elevation
- **Cards**: Subtle border, light shadow
- **Hover**: Increased shadow
- **Active**: Ring outline
- **Focus**: Ring + outline

### Typography
- **Headings**: Bold, high contrast
- **Body**: Regular weight, comfortable line height
- **Labels**: Smaller, muted color
- **Monospace**: For file paths and code

---

## 🔄 Navigation Flow

### Primary Flow
```
Dashboard → My Files → File Preview → Back
                    ↓
                 Share → Permissions
```

### Admin Flow
```
Dashboard → Users & Teams → Settings
```

### Workflow Flow
```
Dashboard → Approvals → File Preview → Approve/Reject
```

### Quick Access
```
Dashboard → Quick Actions → Upload/Share/Create
Dashboard → Recent Activity → Click activity → File
```

---

## 💡 Usage Tips for Each Screen

### Dashboard
- **Use for:** Daily overview, quick access
- **Look at:** Storage usage, recent activity
- **Click on:** Quick action cards, recent files

### File Explorer
- **Use for:** Finding and organizing files
- **Try:** Table vs Grid view, folder navigation
- **Select:** Multiple files for bulk actions

### File Preview
- **Use for:** Viewing file details
- **Check:** Version history, comments
- **Action:** Download, share, or comment

### Permissions
- **Use for:** Managing access
- **Add:** Users with specific roles
- **Create:** External share links

### Workflow
- **Use for:** Document approvals
- **Review:** Pending requests
- **Action:** Approve or reject with feedback

### Admin Users
- **Use for:** User management
- **Manage:** Roles and teams
- **Invite:** New team members

### Settings
- **Use for:** System configuration
- **Configure:** Notifications, security, storage
- **Toggle:** Dark mode and features

---

## 🎊 You're All Set!

Every screen is fully functional and ready to explore. The application follows modern SaaS design patterns with a focus on usability and enterprise features.

**Open http://localhost:5173/ and start exploring!** 🚀

