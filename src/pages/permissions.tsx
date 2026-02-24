import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Shield,
  Users,
  Link as LinkIcon,
  Copy,
  Trash2,
  Eye,
  Edit,
  Crown,
  X,
  Plus,
  Mail,
  UserPlus,
} from 'lucide-react';
import { mockFiles, mockUsers, formatDate } from '@/lib/mock-data';
import type { User, PermissionLevel } from '@/lib/types';

const permissionLevels: { value: PermissionLevel; label: string; description: string }[] = [
  { value: 'owner', label: 'Owner', description: 'Full control' },
  { value: 'can_edit', label: 'Can Edit', description: 'Can view and edit' },
  { value: 'can_view', label: 'Can View', description: 'Can only view' },
  { value: 'can_comment', label: 'Can Comment', description: 'Can view and comment' },
];

export default function PermissionsManagement() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const fileId = searchParams.get('fileId') || 'f1';
  const file = mockFiles.find(f => f.id === fileId);

  const [sharedUsers, setSharedUsers] = useState<Array<{ user: User; permission: PermissionLevel }>>([
    { user: mockUsers[1], permission: 'can_edit' },
    { user: mockUsers[2], permission: 'can_view' },
  ]);

  const [showAddUserDialog, setShowAddUserDialog] = useState(false);
  const [showShareLinkDialog, setShowShareLinkDialog] = useState(false);
  const shareLink = 'https://docuvault.app/s/abc123xyz';
  const [linkPermission, setLinkPermission] = useState<'view' | 'edit'>('view');
  const [linkExpiry, setLinkExpiry] = useState('7');
  const [linkPassword, setLinkPassword] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
  };

  const handleRemoveUser = (userId: string) => {
    setSharedUsers(sharedUsers.filter(su => su.user.id !== userId));
  };

  const handlePermissionChange = (userId: string, permission: PermissionLevel) => {
    setSharedUsers(sharedUsers.map(su =>
      su.user.id === userId ? { ...su, permission } : su
    ));
  };

  if (!file) return null;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <Button variant="ghost" size="sm" onClick={() => navigate('/files')} className="mb-4">
          ← Back to Files
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Permissions & Sharing</h1>
        <p className="text-muted-foreground mt-1">
          Manage who has access to <span className="font-medium">{file.name}</span>
        </p>
      </div>

      <Tabs defaultValue="people" className="w-full">
        <TabsList>
          <TabsTrigger value="people" className="gap-2">
            <Users className="h-4 w-4" />
            People
          </TabsTrigger>
          <TabsTrigger value="links" className="gap-2">
            <LinkIcon className="h-4 w-4" />
            Share Links
          </TabsTrigger>
        </TabsList>

        {/* People Tab */}
        <TabsContent value="people" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Who has access</CardTitle>
                  <CardDescription className="mt-1">
                    Manage people and teams with access to this file
                  </CardDescription>
                </div>
                <Button onClick={() => setShowAddUserDialog(true)}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add People
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Owner */}
              <div className="mb-6 pb-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={file.owner.avatar} alt={file.owner.name} />
                      <AvatarFallback>
                        {file.owner.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium flex items-center gap-2">
                        {file.owner.name}
                        <Badge variant="secondary" className="gap-1">
                          <Crown className="h-3 w-3" />
                          Owner
                        </Badge>
                      </p>
                      <p className="text-sm text-muted-foreground">{file.owner.email}</p>
                    </div>
                  </div>
                  <Badge variant="outline">Full Control</Badge>
                </div>
              </div>

              {/* Shared Users */}
              <div className="space-y-3">
                {sharedUsers.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Not shared with anyone yet</p>
                    <p className="text-sm">Add people to start collaborating</p>
                  </div>
                ) : (
                  sharedUsers.map((su) => (
                    <div key={su.user.id} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={su.user.avatar} alt={su.user.name} />
                          <AvatarFallback>
                            {su.user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{su.user.name}</p>
                          <p className="text-sm text-muted-foreground">{su.user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Select
                          value={su.permission}
                          onValueChange={(value) => handlePermissionChange(su.user.id, value as PermissionLevel)}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {permissionLevels.slice(1).map((level) => (
                              <SelectItem key={level.value} value={level.value}>
                                {level.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveUser(su.user.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Permission Levels Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Permission Levels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {permissionLevels.map((level) => (
                <div key={level.value} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted shrink-0 mt-0.5">
                    {level.value === 'owner' && <Crown className="h-4 w-4" />}
                    {level.value === 'can_edit' && <Edit className="h-4 w-4" />}
                    {level.value === 'can_view' && <Eye className="h-4 w-4" />}
                    {level.value === 'can_comment' && <Shield className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{level.label}</p>
                    <p className="text-sm text-muted-foreground">{level.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Share Links Tab */}
        <TabsContent value="links" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Share Links</CardTitle>
                  <CardDescription className="mt-1">
                    Create secure links to share externally
                  </CardDescription>
                </div>
                <Button onClick={() => setShowShareLinkDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Link
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Link</TableHead>
                    <TableHead>Permission</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          https://docuvault.app/s/abc123xyz
                        </code>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        <Eye className="h-3 w-3 mr-1" />
                        View Only
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(new Date('2026-02-20'))}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Feb 27, 2026
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">47</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopyLink}>
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add User Dialog */}
      <Dialog open={showAddUserDialog} onOpenChange={setShowAddUserDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add People</DialogTitle>
            <DialogDescription>
              Share this file with people in your organization
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email addresses</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email addresses (comma separated)"
              />
              <p className="text-xs text-muted-foreground">
                Add one or more email addresses
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="permission">Permission Level</Label>
              <Select defaultValue="can_view">
                <SelectTrigger id="permission">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {permissionLevels.slice(1).map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      <div>
                        <p className="font-medium">{level.label}</p>
                        <p className="text-xs text-muted-foreground">{level.description}</p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notify via email</Label>
                <p className="text-sm text-muted-foreground">
                  Send an email notification to added users
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddUserDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowAddUserDialog(false)}>
              <Mail className="h-4 w-4 mr-2" />
              Send Invite
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create Share Link Dialog */}
      <Dialog open={showShareLinkDialog} onOpenChange={setShowShareLinkDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Share Link</DialogTitle>
            <DialogDescription>
              Generate a secure link to share externally
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="link-permission">Link Permission</Label>
              <Select value={linkPermission} onValueChange={(v) => setLinkPermission(v as 'view' | 'edit')}>
                <SelectTrigger id="link-permission">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="view">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      View Only
                    </div>
                  </SelectItem>
                  <SelectItem value="edit">
                    <div className="flex items-center gap-2">
                      <Edit className="h-4 w-4" />
                      Can Edit
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiry">Link Expiry</Label>
              <Select value={linkExpiry} onValueChange={setLinkExpiry}>
                <SelectTrigger id="expiry">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 day</SelectItem>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Password Protection</Label>
                <p className="text-sm text-muted-foreground">
                  Require a password to access
                </p>
              </div>
              <Switch checked={linkPassword} onCheckedChange={setLinkPassword} />
            </div>
            {linkPassword && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowShareLinkDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowShareLinkDialog(false)}>
              <LinkIcon className="h-4 w-4 mr-2" />
              Create Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

