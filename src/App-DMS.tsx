import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DMSLayout } from '@/layouts/dms-layout';
import Dashboard from '@/pages/dashboard';
import FileExplorer from '@/pages/file-explorer';
import FilePreview from '@/pages/file-preview';
import SharedFiles from '@/pages/shared-files';
import StarredFiles from '@/pages/starred-files';
import RecentFiles from '@/pages/recent-files';
import PermissionsManagement from '@/pages/permissions';
import WorkflowApproval from '@/pages/workflow-approval';
import AdminUsers from '@/pages/admin-users';
import Settings from '@/pages/settings';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <Router>
      <DMSLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/files" element={<FileExplorer />} />
          <Route path="/files/:fileId" element={<FilePreview />} />
          <Route path="/shared" element={<SharedFiles />} />
          <Route path="/starred" element={<StarredFiles />} />
          <Route path="/recent" element={<RecentFiles />} />
          <Route path="/permissions" element={<PermissionsManagement />} />
          <Route path="/workflow" element={<WorkflowApproval />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </DMSLayout>
      <Toaster position="bottom-right" />
    </Router>
  );
}

