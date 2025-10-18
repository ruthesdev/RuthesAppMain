import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { appConfig } from '@/config/app.config'
import { ModeToggle } from '@/components/mode-toggle'
import { DonationDialog } from '@/components/donation-dialog'
import { ChevronRight, Globe, Menu, Instagram } from 'lucide-react'
import { useState } from 'react'

interface DocumentationLayoutProps {
  children: ReactNode
  title: string
  description?: string
  currentPath?: string
}

export function DocumentationLayout({ 
  children, 
  title, 
  description, 
  currentPath = '/' 
}: DocumentationLayoutProps) {
  const [navOpen, setNavOpen] = useState(false)

  const navItems = [
    { label: 'Visão Geral', path: '/documentacao' },
    { label: 'Vite', path: '/documentacao/vite' },
    { label: 'React', path: '/documentacao/react' },
    { label: 'TypeScript', path: '/documentacao/typescript' },
    { label: 'Tailwind CSS', path: '/documentacao/tailwind' },
    { label: 'Radix UI', path: '/documentacao/radix' },
    { label: 'Shadcn/UI', path: '/documentacao/shadcn' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors truncate">
            {appConfig.app.name}
          </a>
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href={appConfig.urls.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              title="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={appConfig.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              title="Portfólio"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href={appConfig.author.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              title="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setNavOpen(!navOpen)}
              className="lg:hidden"
              title="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        {(navOpen || typeof window === 'undefined' || window.innerWidth >= 1024) && (
          <aside className={`w-full lg:w-64 border-b lg:border-b-0 lg:border-r bg-card/30 ${navOpen ? 'block' : 'hidden lg:block'}`}>
            <nav className="sticky top-20 p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
              {navItems.map((item) => (
                <a key={item.path} href={item.path} onClick={() => setNavOpen(false)}>
                  <Button
                    variant={currentPath === item.path ? 'default' : 'ghost'}
                    className="w-full justify-start text-sm md:text-base"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Button>
                </a>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 px-3 sm:px-6 lg:px-8 py-8 md:py-12 max-w-4xl mx-auto w-full">
          {/* Page Header */}
          <div className="mb-8 pb-8 border-b">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
              {title}
            </h1>
            {description && (
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                {description}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6 text-sm md:text-base leading-7">
            {children}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Left: Info */}
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Desenvolvido por{' '}
                  <a
                    href="https://ruthes.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    RuthesDev
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/ruthesdev/RuthesAppMain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Repositório GitHub
                  </a>
                </p>
                <p>© 2025 RuthesApp. Todos os direitos reservados.</p>
              </div>
              
              {/* Right: Donation Button */}
              <div className="flex gap-3 flex-shrink-0">
                <a href={appConfig.author.instagram} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Instagram className="h-4 w-4" />
                    Seguir
                  </Button>
                </a>
                <DonationDialog />
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}

