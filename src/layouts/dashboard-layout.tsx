import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardFooter } from "@/components/dashboard/dashboard-footer"

interface DashboardLayoutProps {
  children: React.ReactNode
  userName?: string
  pageTitle?: string
}

export function DashboardLayout({ children, userName, pageTitle }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar - Full Height */}
      <DashboardSidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Container */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <DashboardHeader userName={userName} pageTitle={pageTitle} />

        {/* Page Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 md:p-6">
              {children}
            </div>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0">
            <DashboardFooter />
          </div>
        </main>
      </div>
    </div>
  )
}
