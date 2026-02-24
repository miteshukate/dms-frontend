import * as React from "react";
import {
  Home,
  FolderOpen,
  Share2,
  Clock,
  Star,
  Users,
  Settings,
  GitBranch,
  Trash2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: Home,
      },
      {
        title: "My Files",
        url: "/files",
        icon: FolderOpen,
      },
      {
        title: "Shared with me",
        url: "/shared",
        icon: Share2,
      },
      {
        title: "Recent",
        url: "/recent",
        icon: Clock,
      },
      {
        title: "Starred",
        url: "/starred",
        icon: Star,
      },
    ],
  },
  {
    title: "Workflow",
    items: [
      {
        title: "Approvals",
        url: "/workflow",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "Administration",
    items: [
      {
        title: "Users & Teams",
        url: "/admin/users",
        icon: Users,
      },
      {
        title: "Settings",
        url: "/admin/settings",
        icon: Settings,
      },
    ],
  },
];

export function DMSSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b px-3 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <FolderOpen className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">DocuVault</span>
            <span className="text-xs text-muted-foreground">Enterprise DMS</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">
              {section.title}
            </SidebarGroupLabel>
            <SidebarMenu>
              {section.items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t p-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Trash2 className="h-3.5 w-3.5" />
          <span>Storage: 47.2 GB / 100 GB</span>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

