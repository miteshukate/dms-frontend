import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileTable } from '@/components/dms/file-table';
import { mockFiles } from '@/lib/mock-data';
import { useNavigate } from 'react-router-dom';
import { Share2 } from 'lucide-react';

export default function SharedFiles() {
  const navigate = useNavigate();

  // Filter files that have been shared
  const sharedFiles = mockFiles.filter(f => f.sharedWith && f.sharedWith.length > 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Shared with Me</h1>
        <p className="text-muted-foreground mt-1">
          Files and folders that others have shared with you
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Shared Documents</CardTitle>
          </div>
          <CardDescription>
            {sharedFiles.length} {sharedFiles.length === 1 ? 'file' : 'files'} shared with you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileTable
            files={sharedFiles}
            onFileClick={(file) => navigate(`/files/${file.id}`)}
          />
        </CardContent>
      </Card>
    </div>
  );
}

