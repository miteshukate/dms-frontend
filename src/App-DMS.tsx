import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DMSLayout } from '@/layouts/dms-layout';
import { SearchProvider } from '@/context/search-context';
import { AuthProvider } from '@/context/auth-context';
import { ProtectedRoute } from '@/components/protected-route';
import Login from '@/pages/login';
import FileExplorer from '@/pages/file-explorer';
import FilePreview from '@/pages/file-preview';
import PermissionsManagement from '@/pages/permissions';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <DMSLayout>
                    <Routes>
                      <Route path="/" element={<Navigate to="/files" replace />} />
                      <Route path="/files" element={<FileExplorer />} />
                      <Route path="/files/:fileId" element={<FilePreview />} />
                      <Route path="/permissions" element={<PermissionsManagement />} />
                      <Route path="*" element={<Navigate to="/files" replace />} />
                    </Routes>
                  </DMSLayout>
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster position="bottom-right" />
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}

