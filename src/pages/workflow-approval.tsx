import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Calendar,
  AlertCircle,
  Eye,
} from 'lucide-react';
import { mockWorkflowItems, formatDate } from '@/lib/mock-data';
import type { WorkflowStatus } from '@/lib/types';
import { useNavigate } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

const statusConfig: Record<WorkflowStatus, { label: string; variant: 'default' | 'secondary' | 'destructive'; icon: LucideIcon }> = {
  pending: {
    label: 'Pending',
    variant: 'secondary',
    icon: Clock,
  },
  in_review: {
    label: 'In Review',
    variant: 'default',
    icon: AlertCircle,
  },
  approved: {
    label: 'Approved',
    variant: 'default',
    icon: CheckCircle,
  },
  rejected: {
    label: 'Rejected',
    variant: 'destructive',
    icon: XCircle,
  },
};

export default function WorkflowApproval() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(mockWorkflowItems[1]);
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleApprove = () => {
    console.log('Approved with comment:', comment);
    setShowApproveDialog(false);
    setComment('');
  };

  const handleReject = () => {
    console.log('Rejected with comment:', comment);
    setShowRejectDialog(false);
    setComment('');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Workflow Approvals</h1>
        <p className="text-muted-foreground mt-1">
          Review and approve document workflow requests
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 dark:bg-yellow-950">
                <Clock className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {mockWorkflowItems.filter(w => w.status === 'pending').length}
                </p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
                <AlertCircle className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {mockWorkflowItems.filter(w => w.status === 'in_review').length}
                </p>
                <p className="text-sm text-muted-foreground">In Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 dark:bg-green-950">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {mockWorkflowItems.filter(w => w.status === 'approved').length}
                </p>
                <p className="text-sm text-muted-foreground">Approved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 dark:bg-red-950">
                <XCircle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {mockWorkflowItems.filter(w => w.status === 'rejected').length}
                </p>
                <p className="text-sm text-muted-foreground">Rejected</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workflow List and Details */}
      <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
        {/* Workflow Queue */}
        <Card>
          <CardHeader>
            <CardTitle>Approval Queue</CardTitle>
            <CardDescription>Documents awaiting your review</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document</TableHead>
                  <TableHead>Requested By</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockWorkflowItems.map((workflow) => {
                  const status = statusConfig[workflow.status];
                  const StatusIcon = status.icon;
                  const isSelected = selectedWorkflow?.id === workflow.id;

                  return (
                    <TableRow
                      key={workflow.id}
                      className={`cursor-pointer ${isSelected ? 'bg-muted/50' : ''}`}
                      onClick={() => setSelectedWorkflow(workflow)}
                    >
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{workflow.file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Version {workflow.file.version}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={workflow.requestedBy.avatar} />
                            <AvatarFallback className="text-xs">
                              {workflow.requestedBy.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{workflow.requestedBy.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {workflow.dueDate ? formatDate(workflow.dueDate) : '—'}
                      </TableCell>
                      <TableCell>
                        <Badge variant={status.variant} className="gap-1">
                          <StatusIcon className="h-3 w-3" />
                          {status.label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/files/${workflow.file.id}`);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Workflow Details */}
        {selectedWorkflow && (
          <Card className="h-fit sticky top-24">
            <CardHeader>
              <CardTitle className="text-lg">Workflow Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Document Info */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Document</p>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{selectedWorkflow.file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Version {selectedWorkflow.file.version}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Status */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Status</p>
                <Badge variant={statusConfig[selectedWorkflow.status].variant} className="gap-1">
                  {(() => {
                    const StatusIcon = statusConfig[selectedWorkflow.status].icon;
                    return <StatusIcon className="h-3 w-3" />;
                  })()}
                  {statusConfig[selectedWorkflow.status].label}
                </Badge>
              </div>

              <Separator />

              {/* Requested By */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Requested By</p>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={selectedWorkflow.requestedBy.avatar} />
                    <AvatarFallback>
                      {selectedWorkflow.requestedBy.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{selectedWorkflow.requestedBy.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(selectedWorkflow.requestedAt)}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Due Date */}
              {selectedWorkflow.dueDate && (
                <>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Due Date</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {selectedWorkflow.dueDate.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                  <Separator />
                </>
              )}

              {/* Approvers */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Approvers</p>
                <div className="space-y-2">
                  {selectedWorkflow.approvers.map((approver) => (
                    <div key={approver.id} className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={approver.avatar} />
                        <AvatarFallback className="text-xs">
                          {approver.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{approver.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Comments */}
              {selectedWorkflow.comments && selectedWorkflow.comments.length > 0 && (
                <>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-3">Comments</p>
                    <div className="space-y-3">
                      {selectedWorkflow.comments.map((comment) => (
                        <div key={comment.id} className="space-y-2">
                          <div className="flex items-start gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={comment.user.avatar} />
                              <AvatarFallback className="text-xs">
                                {comment.user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="text-sm font-medium">{comment.user.name}</p>
                                <span className="text-xs text-muted-foreground">
                                  {formatDate(comment.createdAt)}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {comment.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                </>
              )}

              {/* Action Buttons */}
              {(selectedWorkflow.status === 'pending' || selectedWorkflow.status === 'in_review') && (
                <div className="space-y-2 pt-2">
                  <Button
                    className="w-full gap-2"
                    onClick={() => setShowApproveDialog(true)}
                  >
                    <CheckCircle className="h-4 w-4" />
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => setShowRejectDialog(true)}
                  >
                    <XCircle className="h-4 w-4" />
                    Reject
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full gap-2"
                    onClick={() => navigate(`/files/${selectedWorkflow.file.id}`)}
                  >
                    <Eye className="h-4 w-4" />
                    Preview Document
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Approve Dialog */}
      <Dialog open={showApproveDialog} onOpenChange={setShowApproveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approve Document</DialogTitle>
            <DialogDescription>
              Are you sure you want to approve "{selectedWorkflow.file.name}"?
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Add a comment (optional)</label>
              <Textarea
                placeholder="Add feedback or notes..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowApproveDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleApprove}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Approve
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Document</DialogTitle>
            <DialogDescription>
              Please provide a reason for rejecting "{selectedWorkflow.file.name}"
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rejection reason *</label>
              <Textarea
                placeholder="Explain why this document is being rejected..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleReject}
              disabled={!comment.trim()}
            >
              <XCircle className="h-4 w-4 mr-2" />
              Reject
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

