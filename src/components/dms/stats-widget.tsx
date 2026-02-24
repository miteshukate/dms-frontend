import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsWidgetProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    label: string;
  };
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export function StatsWidget({
  title,
  value,
  change,
  icon: Icon,
  trend = 'neutral',
  className
}: StatsWidgetProps) {
  const trendColors = {
    up: 'text-green-600 dark:text-green-500',
    down: 'text-red-600 dark:text-red-500',
    neutral: 'text-muted-foreground',
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={cn('text-xs mt-1', trendColors[trend])}>
            {change.value > 0 ? '+' : ''}{change.value}% {change.label}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

