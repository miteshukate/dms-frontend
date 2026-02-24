import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { StatsWidget } from '@/components/dms/stats-widget';
import { ActivityTimeline } from '@/components/dms/activity-timeline';
import { FileTable } from '@/components/dms/file-table';
import {
  HardDrive,
  FileText,
  FolderOpen,
  Share2,
  TrendingUp,
  Upload,
  ArrowRight,
} from 'lucide-react';
import { mockStorageStats, mockActivityLogs, mockFiles, formatFileSize } from '@/lib/mock-data';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const storagePercentage = (mockStorageStats.used / mockStorageStats.total) * 100;
  const recentFiles = mockFiles.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your documents.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsWidget
          title="Total Storage"
          value={formatFileSize(mockStorageStats.used)}
          change={{ value: 12, label: 'from last month' }}
          icon={HardDrive}
          trend="up"
        />
        <StatsWidget
          title="Total Files"
          value={mockStorageStats.fileCount}
          change={{ value: 8, label: 'from last week' }}
          icon={FileText}
          trend="up"
        />
        <StatsWidget
          title="Folders"
          value={mockStorageStats.folderCount}
          change={{ value: 3, label: 'from last week' }}
          icon={FolderOpen}
          trend="up"
        />
        <StatsWidget
          title="Shared Items"
          value={mockStorageStats.sharedCount}
          change={{ value: 15, label: 'from last week' }}
          icon={Share2}
          trend="up"
        />
      </div>

      {/* Storage Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Storage Overview</CardTitle>
              <CardDescription className="mt-1">
                {formatFileSize(mockStorageStats.used)} of {formatFileSize(mockStorageStats.total)} used
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Upgrade Storage
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={storagePercentage} className="h-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {storagePercentage.toFixed(1)}% used
              </span>
              <span className="text-muted-foreground">
                {formatFileSize(mockStorageStats.total - mockStorageStats.used)} available
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Activity</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => navigate('/activity')}>
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityTimeline activities={mockActivityLogs} maxItems={6} />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-4"
              onClick={() => navigate('/files')}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Upload className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium">Upload Files</p>
                <p className="text-xs text-muted-foreground">Add documents to your workspace</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-4"
              onClick={() => navigate('/files')}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <FolderOpen className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-left">
                <p className="font-medium">Create Folder</p>
                <p className="text-xs text-muted-foreground">Organize your documents</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-4"
              onClick={() => navigate('/shared')}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                <Share2 className="h-5 w-5 text-purple-500" />
              </div>
              <div className="text-left">
                <p className="font-medium">Share Documents</p>
                <p className="text-xs text-muted-foreground">Collaborate with your team</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-4"
              onClick={() => navigate('/workflow')}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div className="text-left">
                <p className="font-medium">Pending Approvals</p>
                <p className="text-xs text-muted-foreground">Review workflow requests</p>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Files */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Files</CardTitle>
              <CardDescription className="mt-1">
                Files you've worked on recently
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate('/files')}>
              View all files
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
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

