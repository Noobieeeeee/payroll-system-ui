import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  Users,
  Calculator,
  DollarSign,
  ArrowUpDown,
  FileText,
  BarChart2,
  Settings,
  Clock,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: BarChart3, url: "/" },
  { title: "Employees", icon: Users, url: "/employees" },
  { title: "Attendance", icon: Clock, url: "/attendance" },
  { title: "Payroll", icon: Calculator, url: "/payroll" },
  { title: "Cash Advance", icon: DollarSign, url: "/cash-advance" },
  { title: "Rate Adjustments", icon: ArrowUpDown, url: "/rate-adjustments" },
  { title: "Tax Compliance", icon: FileText, url: "/tax" },
  { title: "Reports", icon: BarChart2, url: "/reports" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>PayrollPH</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className="flex items-center gap-2"
                      data-active={location.pathname === item.url}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}