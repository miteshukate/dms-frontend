# 📸 DMS Screen Layouts - Visual Reference

## Screen 1: Dashboard (`/`)

```
┌────────────────────────────────────────────────────────────────────────┐
│ [☰] [Search...........................] [⬆ Upload] [🔔²] [👤]        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Dashboard                                                              │
│  Welcome back! Here's what's happening with your documents.            │
│                                                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                     │
│  │💾 47 GB │ │📄 1,247 │ │📁 89    │ │🔗 234   │                     │
│  │+12%     │ │Files    │ │Folders  │ │Shared   │                     │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘                     │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ Storage Overview                    [Upgrade Storage]   │          │
│  │ 47.2 GB of 100 GB used                                  │          │
│  │ ████████████░░░░░░░░░░░░░░░░░░░░ 47%                  │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
│  ┌──────────────────────┐  ┌──────────────────────┐                  │
│  │ Recent Activity      │  │ Quick Actions        │                  │
│  │ [View all →]         │  │                      │                  │
│  │                      │  │ ┌──────────────────┐ │                  │
│  │ 👤 John uploaded...  │  │ │ ⬆ Upload Files   │ │                  │
│  │ 👤 Sarah approved... │  │ └──────────────────┘ │                  │
│  │ 👤 Mike downloaded...│  │ ┌──────────────────┐ │                  │
│  │ 👤 Emily commented...│  │ │ 📁 Create Folder │ │                  │
│  │ 👤 Alex shared...    │  │ └──────────────────┘ │                  │
│  └──────────────────────┘  └──────────────────────┘                  │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ Recent Files                          [View all files →]│          │
│  │ ☐ Name               Owner    Modified    Size         │          │
│  │ ☐ 📄 Q4 Report       John     2h ago      2.5 MB    ⋮ │          │
│  │ ☐ 📘 Roadmap         Sarah    5h ago      892 KB    ⋮ │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Screen 2: File Explorer (`/files`)

```
┌────────────────────────────────────────────────────────────────────────┐
│ [☰] [Search...........................] [⬆ Upload] [🔔²] [👤]        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  My Files > Finance                                                    │
│                                                                         │
│  ┌──────────────┐  ┌─────────────────────────────────────────────────┐│
│  │ [+ New Folder]│  │ All Files [6 items]                            ││
│  │              │  │                                                  ││
│  │ 📁 Finance   │  │ [2 selected] [⬇ Download] [🔗 Share] [🗑 Del] ││
│  │ 📁 Product   │  │ [Filter] [Sort] [📋] [⊞]                      ││
│  │ 📁 Marketing │  │                                                  ││
│  │ 📁 Engineering│ │ ☐ Name          Owner  Modified   Size      ⋮ ││
│  │ 📁 Assets    │  │ ☐ 📄 Q4 Report  John   2h ago    2.5 MB   ⋮ ││
│  │ 📁 Sales     │  │ ☐ 📊 Budget     John   1d ago    456 KB   ⋮ ││
│  │              │  │ ☐ 📄 API Docs   Mike   2d ago    1.2 MB   ⋮ ││
│  │              │  │ ☐ 📸 Logo.png   Emily  28d ago   234 KB   ⋮ ││
│  │              │  │                                                  ││
│  │              │  │ ┌───────────────────────────────────────────┐  ││
│  │              │  │ │ Activity This Week                        │  ││
│  │              │  │ │ ⬆ 47 uploads  🔗 23 shared  ⭐ 12 starred│  ││
│  │              │  │ └───────────────────────────────────────────┘  ││
│  └──────────────┘  └─────────────────────────────────────────────────┘│
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Screen 3: File Preview (`/files/:id`)

```
┌────────────────────────────────────────────────────────────────────────┐
│ [☰] [Search...........................] [⬆ Upload] [🔔²] [👤]        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ← Back to Files                                                       │
│                                                                         │
│  Q4 Financial Report.pdf ⭐        [⬇ Download] [🔗 Share] [⋮]       │
│  👤 John Smith • Modified 2h ago • 2.5 MB • Version 3                 │
│                                                                         │
│  ┌──────────────────────────────────┐  ┌────────────────────┐        │
│  │                                  │  │ File Details       │        │
│  │                                  │  │ Type: PDF          │        │
│  │         ┌────────────┐           │  │ Size: 2.5 MB       │        │
│  │         │            │           │  │ Owner: 👤 John     │        │
│  │         │  📄 PDF    │           │  │ Created: Feb 20    │        │
│  │         │            │           │  │ Modified: Feb 22   │        │
│  │         └────────────┘           │  │ Location: /Docs... │        │
│  │                                  │  │ Tags: [finance]    │        │
│  │   Preview not available          │  └────────────────────┘        │
│  │   Click download to view         │                                 │
│  │                                  │  ┌────────────────────┐        │
│  │   [⬇ Download to View]          │  │ Comments [+ Add]   │        │
│  │                                  │  │                    │        │
│  └──────────────────────────────────┘  │ 👤 John: Numbers   │        │
│                                         │    look great!     │        │
│  ┌───────────────────────────────────┐ └────────────────────┘        │
│  │ Version History                   │                                │
│  │ ⏱ Version 3 (Current) 2.5 MB     [⬇ Download]                   │
│  │   "Final with Q4 corrections"     │                                │
│  │ ⏱ Version 2           2.5 MB     [⬇ Download] [👁 View]         │
│  │   "Updated revenue figures"       │                                │
│  └───────────────────────────────────┘                                │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Screen 4: Permissions Management (`/permissions`)

```
┌────────────────────────────────────────────────────────────────────────┐
│ [☰] [Search...........................] [⬆ Upload] [🔔²] [👤]        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ← Back to Files                                                       │
│                                                                         │
│  Permissions & Sharing                                                 │
│  Manage who has access to Q4 Financial Report.pdf                     │
│                                                                         │
│  [👥 People] [🔗 Share Links]                                         │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ Who has access                        [+ Add People]    │          │
│  │                                                          │          │
│  │ 👤 John Smith [👑 Owner]             [Full Control]    │          │
│  │    john.smith@company.com                               │          │
│  │ ────────────────────────────────────────────────────── │          │
│  │ 👤 Sarah Johnson                     [Can Edit ▼] [×] │          │
│  │    sarah.j@company.com                                  │          │
│  │ 👤 Mike Chen                         [Can View ▼] [×] │          │
│  │    mike.chen@company.com                                │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ Permission Levels                                       │          │
│  │ 👑 Owner       - Full control                           │          │
│  │ ✏️  Can Edit    - View and edit                        │          │
│  │ 👁 Can View    - Read-only access                       │          │
│  │ 💬 Can Comment - View and comment                       │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Screen 5: Workflow Approval (`/workflow`)

```
┌────────────────────────────────────────────────────────────────────────┐
│ [☰] [Search...........................] [⬆ Upload] [🔔²] [👤]        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Workflow Approvals                                                    │
│  Review and approve document workflow requests                         │
│                                                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                                    │
│  │⏱ 1  │ │⚠ 1  │ │✓ 1  │ │✗ 1  │                                    │
│  │Pend.│ │Review│ │Appr.│ │Rej. │                                    │
│  └─────┘ └─────┘ └─────┘ └─────┘                                    │
│                                                                         │
│  ┌────────────────────────────┐  ┌──────────────────────┐            │
│  │ Approval Queue             │  │ Workflow Details     │            │
│  │ Document    Requested By   │  │                      │            │
│  │ 📄 Roadmap  Sarah   [⚠️]  │  │ Document:            │            │
│  │ 📄 Presenta Emily   [⏱]  │  │ 📄 Product Roadmap   │            │
│  │ 📄 Q4 Report John    [✓]  │  │                      │            │
│  │ 📄 Contract Alex     [✗]  │  │ Status: [⚠️ Review] │            │
│  │                            │  │                      │            │
│  │                            │  │ Requested By:        │            │
│  │                            │  │ 👤 Sarah Johnson     │            │
│  │                            │  │ 2d ago               │            │
│  │                            │  │                      │            │
│  │                            │  │ Approvers:           │            │
│  │                            │  │ 👤 John Smith        │            │
│  │                            │  │ 👤 Mike Chen         │            │
│  │                            │  │                      │            │
│  │                            │  │ Comments:            │            │
│  │                            │  │ 👤 Mike: Please      │            │
│  │                            │  │    review Q3...      │            │
│  │                            │  │                      │            │
│  │                            │  │ [✓ Approve]         │            │
│  │                            │  │ [✗ Reject]          │            │
│  │                            │  │ [👁 Preview]        │            │
│  └────────────────────────────┘  └──────────────────────┘            │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Screen 6: Admin - Users & Teams (`/admin/users`)

```
┌────────────────────────────────────────────────────────────────────────┐
│ [☰] [Search...........................] [⬆ Upload] [🔔²] [👤]        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Users & Teams                                                         │
│  Manage users, roles, and team permissions                            │
│                                                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                                    │
│  │👥 5  │ │👑 1  │ │🏢 4  │ │📊 3  │                                    │
│  │Users│ │Admin│ │Teams│ │Active│                                    │
│  └─────┘ └─────┘ └─────┘ └─────┘                                    │
│                                                                         │
│  [👥 Users] [🏢 Teams]                                                │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ User Management               [👤+ Invite User]         │          │
│  │                                                          │          │
│  │ [🔍 Search users...]                           [Filter] │          │
│  │                                                          │          │
│  │ User            Role      Team        Last Active  ⋮   │          │
│  │ 👤 John Smith   [Admin]   Engineering 30m ago     ⋮   │          │
│  │ 👤 Sarah J.     [Editor]  Product     1h ago      ⋮   │          │
│  │ 👤 Mike Chen    [Editor]  Engineering 1d ago      ⋮   │          │
│  │ 👤 Emily Davis  [Viewer]  Marketing   2d ago      ⋮   │          │
│  │ 👤 Alex Rivera  [Viewer]  Sales       3d ago      ⋮   │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Screen 7: Upload Dialog (Modal)

```
                    ┌────────────────────────────────┐
                    │ Upload Files              [×]  │
                    │ Upload files and documents to  │
                    │ your workspace                 │
                    ├────────────────────────────────┤
                    │                                │
                    │  ┌──────────────────────────┐  │
                    │  │                          │  │
                    │  │     📤                   │  │
                    │  │                          │  │
                    │  │  Drag & drop files here  │  │
                    │  │  or click to browse      │  │
                    │  │                          │  │
                    │  │  [Choose Files]          │  │
                    │  │                          │  │
                    │  └──────────────────────────┘  │
                    │                                │
                    │  📄 document.pdf (2.5 MB)      │
                    │  ████████████████░░░░ 80%     │
                    │                                │
                    └────────────────────────────────┘
```

---

## Layout Components Breakdown

### Sidebar Navigation (Collapsible)
```
┌─────────────────┐
│ 📁 DocuVault    │
│ Enterprise DMS  │
├─────────────────┤
│ MAIN            │
│ 🏠 Dashboard    │
│ 📁 My Files     │
│ 🔗 Shared       │
│ 🕐 Recent       │
│ ⭐ Starred      │
├─────────────────┤
│ WORKFLOW        │
│ 🔀 Approvals    │
├─────────────────┤
│ ADMINISTRATION  │
│ 👥 Users/Teams  │
│ ⚙️  Settings    │
├─────────────────┤
│ Storage: 47/100 │
└─────────────────┘
```

### Header Bar
```
┌──────────────────────────────────────────────────────────────────┐
│ [☰] | [🔍 Search files, folders, people...]  [⬆ Upload] [🔔²] [👤] │
└──────────────────────────────────────────────────────────────────┘
```

### Notifications Dropdown
```
        ┌────────────────────────────┐
        │ Notifications      [2 new] │
        ├────────────────────────────┤
        │ ● Document Approved        │
        │   Q4 Report approved       │
        │   2h ago                   │
        ├────────────────────────────┤
        │ ● New Comment              │
        │   Mike commented on...     │
        │   5h ago                   │
        ├────────────────────────────┤
        │   Approval Pending         │
        │   Marketing Pres...        │
        │   1d ago                   │
        ├────────────────────────────┤
        │ [View all notifications]   │
        └────────────────────────────┘
```

### User Menu
```
        ┌────────────────────────┐
        │ John Smith             │
        │ john@company.com       │
        │ [Admin]                │
        ├────────────────────────┤
        │ 👤 Profile             │
        │ ⚙️  Settings           │
        ├────────────────────────┤
        │ 🌙 Dark Mode           │
        ├────────────────────────┤
        │ 🚪 Sign out            │
        └────────────────────────┘
```

---

## Card-Based Layouts

### Stats Widget
```
┌────────────────────┐
│ Total Storage  💾  │
│ 47.2 GB            │
│ +12% from last mo  │
└────────────────────┘
```

### File Card (Grid View)
```
┌──────────────────┐
│ ☐            ⋮   │
│                  │
│    ┌────────┐    │
│    │  📄    │    │
│    └────────┘    │
│                  │
│ Q4 Report.pdf ⭐ │
│ 2.5 MB           │
├──────────────────┤
│ 👤 John  • 2h ago│
└──────────────────┘
```

### Team Card
```
┌──────────────────────┐
│ Engineering      ⋮   │
│ Dev team             │
│                      │
│ Members: [2]         │
│ 👤👤                 │
│ Created 2 months ago │
└──────────────────────┘
```

---

## Interactive Elements

### Context Menu (File Actions)
```
┌──────────────────┐
│ 👁 Preview       │
│ ⬇ Download      │
│ 🔗 Share        │
│ ✏️  Rename       │
│ 🕐 Version Hist  │
├──────────────────┤
│ 🗑 Delete        │
└──────────────────┘
```

### Permission Selector
```
┌────────────────┐
│ Can Edit    ▼  │
├────────────────┤
│ Can Edit       │
│ Can View       │
│ Can Comment    │
└────────────────┘
```

### Status Badges
```
[⏱ Pending]  [⚠️ In Review]  [✓ Approved]  [✗ Rejected]

[Admin]  [Editor]  [Viewer]  [Guest]
```

---

## Responsive Behavior

### Desktop (>1024px)
- Full sidebar visible
- Multi-column layouts
- Large preview areas
- Side-by-side panels

### Tablet (640px-1024px)
- Collapsible sidebar
- 2-column grids
- Stacked sections
- Responsive tables

### Mobile (<640px)
- Hidden sidebar (toggle button)
- Single column
- Stacked cards
- Touch-optimized buttons

---

## Color Scheme

### Light Mode
- Background: White (#FFFFFF)
- Foreground: Dark Gray (#0A0A0A)
- Primary: Indigo (#4F46E5)
- Muted: Gray (#71717A)
- Border: Light Gray (#E4E4E7)

### Dark Mode
- Background: Dark (#0A0A0A)
- Foreground: Light Gray (#FAFAFA)
- Primary: Indigo (#818CF8)
- Muted: Gray (#A1A1AA)
- Border: Dark Gray (#27272A)

### Status Colors
- Success: Green (#22C55E)
- Warning: Yellow (#EAB308)
- Error: Red (#EF4444)
- Info: Blue (#3B82F6)

### File Type Colors
- PDF: Red (#EF4444)
- DOC: Blue (#3B82F6)
- XLS: Green (#22C55E)
- PPT: Orange (#F97316)
- IMG: Purple (#A855F7)
- ZIP: Yellow (#EAB308)

---

## Typography Scale

```
H1: 3xl (30px) - Bold - Page Titles
H2: 2xl (24px) - Bold - Section Titles
H3: xl (20px) - Semibold - Card Titles
H4: lg (18px) - Semibold - Subsections
Body: Base (14px) - Regular - Content
Small: sm (13px) - Regular - Labels
Tiny: xs (12px) - Regular - Metadata
```

---

## Spacing System

```
Gap-2:  8px  - Tight spacing
Gap-3: 12px  - Default spacing
Gap-4: 16px  - Standard spacing
Gap-6: 24px  - Section spacing
Gap-8: 32px  - Large spacing

Padding:
p-2:  8px   - Tight padding
p-4: 16px   - Default padding
p-6: 24px   - Card padding
p-8: 32px   - Large padding
```

---

## Icon Sizes

```
h-4 w-4 (16px) - Small icons (table cells, badges)
h-5 w-5 (20px) - Medium icons (buttons, menu items)
h-6 w-6 (24px) - Large icons (headers)
h-8 w-8 (32px) - Extra large (feature cards)
```

---

This visual reference shows the layout and structure of all major screens in the Document Management System. Each screen follows consistent design patterns and spacing for a cohesive user experience.

