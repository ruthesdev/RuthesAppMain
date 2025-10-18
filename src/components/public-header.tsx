import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { appConfig } from "@/config/app.config"

export function PublicHeader() {
  return (
    <header className="w-full border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/">
            <h1 className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
              {appConfig.app.name}
            </h1>
          </a>
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <a href="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base">
              Roadmap
            </a>
            <a href="/documentacao" className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base">
              Documentação
            </a>
            <a href={appConfig.urls.github} className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base">
              GitHub
            </a>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <ModeToggle />
            <a href="/login" className="hidden sm:block">
              <Button variant="outline" size="sm" className="text-xs md:text-sm">Entrar</Button>
            </a>
            <a href={appConfig.urls.fork} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button size="sm" className="text-xs md:text-sm">Fork</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
