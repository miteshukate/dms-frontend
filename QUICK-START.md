# 🚀 Quick Start Guide - Enterprise DMS

## Getting Started in 3 Steps

### Step 1: Start the Development Server
```bash
cd /Users/mukate/WebstormProjects/vdr-frontend
pnpm dev
```

The app will open at: **http://localhost:5173/**

### Step 2: Explore the Application
Open your browser and navigate through:

1. **Dashboard** (Default page)
   - View storage stats
   - See recent activity
   - Access quick actions

2. **My Files** (Click in sidebar)
   - Browse files in table or grid view
   - Click folders in left tree
   - Try multi-select with checkboxes
   - Use bulk actions

3. **Click any file** to preview it
   - View file details
   - Check version history
   - Add comments

4. **Approvals** (Click in sidebar)
   - Review pending approvals
   - Approve or reject documents
   - Add feedback comments

5. **Users & Teams** (Click in sidebar)
   - View all users
   - Check team structure
   - Try invite user dialog

### Step 3: Test Key Features

**Upload Files:**
- Click "Upload" button in header
- Drag and drop files into modal

**Share a File:**
- Click "..." menu on any file
- Select "Share"
- Add people or create link

**Toggle Views:**
- In File Explorer, click table/grid icons
- Switch between different views

**Dark Mode:**
- Click user avatar (top right)
- Select "Dark Mode"

---

## 🎯 Navigation Map

```
/ (Dashboard)
├── /files (File Explorer)
│   └── /files/:id (File Preview)
├── /shared (Shared Files)
├── /starred (Starred Files)
├── /recent (Recent Files)
├── /permissions (Permission Management)
├── /workflow (Approval System)
└── /admin
    ├── /admin/users (User Management)
    └── /admin/settings (Settings)
```

---

## 🎨 What You'll See

### Dashboard Highlights
- **4 stat cards** with storage, files, folders, shared counts
- **Storage progress bar** showing 47GB / 100GB
- **Recent activity feed** with user avatars
- **Quick action buttons** for common tasks
- **Recent files table** with owner and dates

### File Explorer Features
- **Left panel**: Collapsible folder tree
- **Main area**: Files in table or grid view
- **Toolbar**: View toggle, filter, sort options
- **Bulk actions**: Appear when files selected
- **Context menu**: Right-click or "..." button

### Beautiful UI Elements
- **Soft shadows** on cards
- **Rounded corners** throughout
- **Smooth transitions** on hover
- **Color-coded** file types (PDF=red, Excel=green)
- **Status badges** with icons
- **User avatars** with fallbacks
- **Empty states** with helpful messages

---

## 🔑 Key Interactions

### Multi-Select Files
1. Click checkbox on any file
2. Select multiple files
3. Bulk action toolbar appears
4. Choose: Download, Share, or Delete

### Navigate Folders
1. Click folder in tree navigation
2. Files in that folder appear
3. Breadcrumb shows current path
4. Click breadcrumb to go back

### Approve Document
1. Go to Workflow page
2. Click document in queue
3. Details appear in right panel
4. Click "Approve" or "Reject"
5. Add optional comment

### Manage Permissions
1. Click "Share" on any file
2. Choose "People" or "Links" tab
3. Add users with specific roles
4. Or create external share link

---

## 💡 Tips & Tricks

### Keyboard Shortcuts (Future)
- `Ctrl/Cmd + K` - Quick search
- `U` - Upload files
- `N` - New folder
- `S` - Star/unstar file

### Best Practices
- Use **folders** to organize documents
- **Star** important files for quick access
- Check **Recent** for last accessed files
- Review **Workflow** for pending approvals
- Monitor **Dashboard** for team activity

### Power User Features
- **Bulk select** with Shift+Click (to implement)
- **Right-click** for context menu (to implement)
- **Drag files** between folders (to implement)
- **Search filters** in header (to implement)

---

## 🎨 Visual Themes

### Light Mode (Default)
- Clean white backgrounds
- Gray text and borders
- Blue accent color
- High contrast for readability

### Dark Mode
- Dark backgrounds
- Light text
- Softer colors
- Reduced eye strain

Toggle in: **User Menu → Dark Mode**

---

## 📊 Mock Data Overview

The app includes realistic test data:

- **5 Users**: John (Admin), Sarah (Editor), Mike (Editor), Emily (Viewer), Alex (Viewer)
- **8 Files**: PDFs, DOCX, XLSX, PPTX, PNG, TXT files
- **6 Folders**: Finance, Product, Marketing, Engineering, Assets, Sales
- **7 Activities**: Recent uploads, downloads, shares, approvals
- **4 Workflows**: Different approval states
- **4 Notifications**: New comments, approvals, shares
- **4 Teams**: Engineering, Product, Marketing, Sales

---

## 🔧 Troubleshooting

### Server won't start?
```bash
# Kill any process on port 5173
lsof -ti:5173 | xargs kill -9

# Restart
pnpm dev
```

### Build errors?
```bash
# Reinstall dependencies
rm -rf node_modules
pnpm install

# Rebuild
pnpm run build
```

### TypeScript errors?
All type errors have been fixed. If you see any:
```bash
# Check types
pnpm run build
```

---

## 📚 Learn More

- **README-DMS.md** - Full project documentation
- **COMPONENT-GUIDE.md** - Component usage reference
- **VISUAL-REFERENCE.md** - Screen layouts
- **IMPLEMENTATION-COMPLETE.md** - Feature checklist

---

## 🎉 You're Ready!

Open **http://localhost:5173/** and start exploring your new Enterprise Document Management System!

Try clicking around:
- Browse files
- Preview documents
- Approve workflows
- Manage users
- Toggle dark mode

Everything is fully interactive and responsive! 🚀

