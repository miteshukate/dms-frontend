import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileTable } from '@/components/dms/file-table';
import { mockFiles } from '@/lib/mock-data';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';

export default function RecentFiles() {
  const navigate = useNavigate();

  // Sort files by modified date
  const recentFiles = [...mockFiles]
    .sort((a, b) => b.modifiedAt.getTime() - a.modifiedAt.getTime())
    .slice(0, 20);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Recent Files</h1>
        <p className="text-muted-foreground mt-1">
          Documents you've accessed recently
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Recent Activity</CardTitle>
          </div>
          <CardDescription>
            Last {recentFiles.length} files you've worked on
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileTable
            files={recentFiles}
            onFileClick={(file) => navigate(`/files/${file.id}`)}
          />
        </CardContent>
      </Card>
    </div>
  );
}

