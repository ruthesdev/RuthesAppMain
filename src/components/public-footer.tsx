import { DonationDialog } from "@/components/donation-dialog"
import { appConfig } from "@/config/app.config"

export function PublicFooter() {
  return (
    <footer className="w-full border-t bg-card/50 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            <p className="mb-2">Desenvolvedor: <a href={appConfig.author.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-foreground transition-colors">{appConfig.author.name}</a></p>
            <p>© 2025 {appConfig.app.name}. Código aberto e disponível para todos.</p>
          </div>
          <DonationDialog />
        </div>
      </div>
    </footer>
  )
}
