import { Button } from "@/components/ui/button"
import { appConfig } from "@/config/app.config"
import { 
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  Bell,
  Lock,
  ChevronRight,
  ChevronLeft
} from "lucide-react"
import { useState } from "react"

interface SidebarItem {
  label: string
  href: string
  icon: React.ReactNode
  badge?: number
  children?: SidebarItem[]
}

interface DashboardSidebarProps {
  isCollapsed?: boolean
  onToggle?: () => void
}

export function DashboardSidebar({ isCollapsed = false, onToggle }: DashboardSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const currentPath = window.location.pathname

  const sidebarItems: SidebarItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      label: "Gestão",
      href: "#",
      icon: <BarChart3 className="h-5 w-5" />,
      children: [
        {
          label: "Usuários",
          href: "/dashboard/usuarios",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "Permissões",
          href: "/dashboard/permissoes",
          icon: <Lock className="h-4 w-4" />,
        },
        {
          label: "Notificações",
          href: "/dashboard/notificacoes",
          icon: <Bell className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "Configurações",
      href: "/dashboard/configuracoes",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  const isItemActive = (href: string): boolean => {
    if (href === "#") return false
    if (href === "/dashboard") return currentPath === "/dashboard"
    return currentPath === href || currentPath.startsWith(href + "/")
  }

  return (
    <aside className={`h-full bg-card border-r flex flex-col transition-all duration-300 ease-in-out relative ${
      isCollapsed ? "w-20" : "w-64"
    }`}>
      {/* Header with Logo and Toggle */}
      <div className={`flex items-center justify-center h-16 border-b flex-shrink-0 ${
        isCollapsed ? "px-1" : "px-4"
      }`}>
        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center flex-shrink-0">
          <BarChart3 className="h-6 w-6 text-primary-foreground" />
        </div>
        
        {!isCollapsed && (
          <h2 className="font-bold text-lg ml-3">{appConfig.app.name}</h2>
        )}
        
        {/* Toggle Button - Overlapping border */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          title={isCollapsed ? "Expandir" : "Colapsar"}
          className="flex-shrink-0 h-8 w-8 absolute -right-4 top-1/2 -translate-y-1/2 bg-card border border-border hover:bg-accent"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.label}>
            <Button
              variant={isItemActive(item.href) ? "secondary" : "ghost"}
              className={`w-full ${isCollapsed ? "justify-center" : "justify-between"}`}
              title={isCollapsed ? item.label : undefined}
              onClick={() => {
                if (item.children) {
                  toggleExpanded(item.label)
                } else {
                  window.location.href = item.href
                }
              }}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </div>
              {!isCollapsed && item.children && (
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedItems.includes(item.label) ? "rotate-90" : ""
                  }`}
                />
              )}
              {!isCollapsed && item.badge && (
                <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
            </Button>

            {/* Submenu - Only show when expanded and not collapsed */}
            {!isCollapsed && item.children && expandedItems.includes(item.label) && (
              <div className="ml-4 space-y-2 mt-2 border-l-2 border-muted-foreground/20 pl-2">
                {item.children.map((child) => (
                  <Button
                    key={child.label}
                    variant={
                      isItemActive(child.href) ? "secondary" : "ghost"
                    }
                    className="w-full justify-start text-sm"
                    title={child.label}
                    onClick={() => {
                      window.location.href = child.href
                    }}
                  >
                    {child.icon}
                    <span>{child.label}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
