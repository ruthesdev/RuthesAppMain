export function DashboardFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-card/50 backdrop-blur-sm">
      <div className="px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RuthesApp. Todos os direitos reservados.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Serviço
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground/70">
              Desenvolvido por{" "}
              <a
                href="https://ruthes.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                RuthesDev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
