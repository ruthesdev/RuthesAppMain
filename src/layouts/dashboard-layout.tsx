import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardFooter } from "@/components/dashboard/dashboard-footer"
import { useIsMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: React.ReactNode
  userName?: string
  pageTitle?: string
}

export function DashboardLayout({ children, userName, pageTitle }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar - Hidden on mobile, shown as drawer - Fixed, No Scroll */}
      <div className={`${isMobile ? "hidden" : "block"} flex-shrink-0 h-screen overflow-hidden`}>
        <DashboardSidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar */}
          <div className="relative z-50 w-64 bg-card h-screen overflow-hidden">
            <DashboardSidebar
              isCollapsed={false}
              onToggle={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <DashboardHeader 
          userName={userName} 
          pageTitle={pageTitle}
          onMenuClick={() => isMobile && setSidebarOpen(!sidebarOpen)}
          showMenuButton={isMobile}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-3 sm:p-4 md:p-6">
            {children}
          </div>
        </main>

        {/* Footer */}
        <div className="flex-shrink-0">
          <DashboardFooter />
        </div>
      </div>
    </div>
  )
}
