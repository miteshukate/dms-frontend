import { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { DMSSidebar } from '@/components/dms/dms-sidebar';
import { DMSHeader } from '@/components/dms/dms-header';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import FileUpload04 from '@/components/file-upload-04';

interface DMSLayoutProps {
  children: React.ReactNode;
}

export function DMSLayout({ children }: DMSLayoutProps) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <SidebarProvider>
      <DMSSidebar />
      <SidebarInset>
        <DMSHeader
          onUploadClick={() => setIsUploadModalOpen(true)}
          onSearchSubmit={(query) => console.log('Search:', query)}
        />
        <main className="flex flex-1 flex-col gap-4 p-6">
          {children}
        </main>
      </SidebarInset>

      {/* Upload Modal */}
      <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Upload Files</DialogTitle>
            <DialogDescription>
              Upload files and documents to your workspace
            </DialogDescription>
          </DialogHeader>
          <FileUpload04 />
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
}

