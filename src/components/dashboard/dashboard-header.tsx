import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LogOut } from "lucide-react"

interface DashboardHeaderProps {
  userName?: string
  pageTitle?: string
}

export function DashboardHeader({ userName = "Usuário", pageTitle = "Dashboard" }: DashboardHeaderProps) {
  return (
    <header className="w-full border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Page Title */}
        <h1 className="text-xl font-bold text-foreground">
          {pageTitle}
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-auto">
          <ModeToggle />
          
          {/* User Info */}
          <div className="hidden md:flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/50">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-semibold text-primary">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-sm font-medium">{userName}</span>
          </div>

          {/* Logout Button */}
          <Button
            variant="ghost"
            size="icon"
            title="Sair"
            onClick={() => {
              // TODO: Implementar logout
              window.location.href = "/login"
            }}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
