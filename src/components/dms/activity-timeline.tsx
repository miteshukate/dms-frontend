import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { ActivityLog } from '@/lib/types';
import { formatDate } from '@/lib/mock-data';
import {
  Upload,
  Download,
  Share2,
  Trash2,
  FileEdit,
  FolderInput,
  MessageSquare,
  CheckCircle,
  XCircle,
  Shield,
} from 'lucide-react';

interface ActivityTimelineProps {
  activities: ActivityLog[];
  maxItems?: number;
}

const activityIcons = {
  upload: Upload,
  download: Download,
  share: Share2,
  delete: Trash2,
  rename: FileEdit,
  move: FolderInput,
  comment: MessageSquare,
  approve: CheckCircle,
  reject: XCircle,
  permission_change: Shield,
};

const activityColors = {
  upload: 'text-blue-500 bg-blue-50 dark:bg-blue-950',
  download: 'text-green-500 bg-green-50 dark:bg-green-950',
  share: 'text-purple-500 bg-purple-50 dark:bg-purple-950',
  delete: 'text-red-500 bg-red-50 dark:bg-red-950',
  rename: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950',
  move: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950',
  comment: 'text-pink-500 bg-pink-50 dark:bg-pink-950',
  approve: 'text-green-500 bg-green-50 dark:bg-green-950',
  reject: 'text-red-500 bg-red-50 dark:bg-red-950',
  permission_change: 'text-orange-500 bg-orange-50 dark:bg-orange-950',
};

export function ActivityTimeline({ activities, maxItems }: ActivityTimelineProps) {
  const displayActivities = maxItems ? activities.slice(0, maxItems) : activities;

  return (
    <div className="space-y-4">
      {displayActivities.map((activity, index) => {
        const Icon = activityIcons[activity.type];
        const colorClass = activityColors[activity.type];

        return (
          <div key={activity.id} className="flex gap-3 group">
            <div className="relative">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${colorClass}`}>
                <Icon className="h-4 w-4" />
              </div>
              {index < displayActivities.length - 1 && (
                <div className="absolute top-8 left-1/2 h-full w-px -translate-x-1/2 bg-border" />
              )}
            </div>
            <div className="flex-1 space-y-1 pb-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                    <AvatarFallback className="text-xs">
                      {activity.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm">
                    <span className="font-medium text-foreground">{activity.user.name}</span>{' '}
                    <span className="text-muted-foreground">{activity.description}</span>
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {formatDate(activity.timestamp)}
                </span>
              </div>
              {activity.file && (
                <p className="text-xs text-muted-foreground pl-7">
                  in <span className="font-medium">{activity.file.path}</span>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

