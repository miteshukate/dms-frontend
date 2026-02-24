import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileTable } from '@/components/dms/file-table';
import { mockFiles } from '@/lib/mock-data';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function StarredFiles() {
  const navigate = useNavigate();

  // Filter starred files
  const starredFiles = mockFiles.filter(f => f.isStarred);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Starred Files</h1>
        <p className="text-muted-foreground mt-1">
          Quick access to your favorite documents
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <CardTitle>Starred Documents</CardTitle>
          </div>
          <CardDescription>
            {starredFiles.length} {starredFiles.length === 1 ? 'file' : 'files'} marked as favorite
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileTable
            files={starredFiles}
            onFileClick={(file) => navigate(`/files/${file.id}`)}
          />
        </CardContent>
      </Card>
    </div>
  );
}

