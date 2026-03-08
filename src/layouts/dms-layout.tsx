import { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { DMSSidebar } from '@/components/dms/dms-sidebar';
import { DMSHeader } from '@/components/dms/dms-header';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import FileUpload04 from '@/components/file-upload-04';
import { useSearch } from '@/context/search-context';
import {useNavigate} from "react-router-dom";

interface DMSLayoutProps {
  children: React.ReactNode;
}

export function DMSLayout({ children }: DMSLayoutProps) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const { setSearchQuery,searchQuery } = useSearch();
  const navigate = useNavigate();
  const handleSearchSubmit = async (query: string) => {
    console.log('Searching for:', query);
    console.log(searchQuery);
    // Update the search query in context
    setSearchQuery(query);
    navigate('/files');
  };

  return (
    <SidebarProvider>
      <DMSSidebar />
      <SidebarInset>
        <DMSHeader
          onUploadClick={() => setIsUploadModalOpen(true)}
          onSearchSubmit={handleSearchSubmit}
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
          <FileUpload04 setIsUploadModalOpen={setIsUploadModalOpen} />
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
}
