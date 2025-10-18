import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PublicHeader } from "@/components/public-header"
import { PublicFooter } from "@/components/public-footer"
import { appConfig } from "@/config/app.config"
import { 
  Zap,
  Package,
  Code2,
  Palette,
  ExternalLink
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <PublicHeader />

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            {appConfig.app.name} Boilerplate
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto px-4">
            Seu ponto de partida para projetos React modernos e escaláveis
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 mb-8 max-w-3xl mx-auto px-4">
            Uma base sólida com componentes UI personalizáveis, tema escuro/claro, TypeScript e Tailwind CSS. Clone, customize e desenvolva seu próximo projeto em minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a href="/documentacao">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Explorar Documentação
              </Button>
            </a>
            <a href={appConfig.urls.github} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                Ver no GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stack Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Stack Moderno & Completo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">React 19</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Code2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">TypeScript</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Palette className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Tailwind CSS</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Shadcn/UI</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <div className="w-full max-w-5xl mx-auto">
          <Card className="bg-primary border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl text-primary-foreground mb-4">
                Pronto para Começar?
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-base md:text-lg">
                Use o RuthesApp como base para seu próximo projeto e veja como é fácil e rápido!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a href={appConfig.urls.fork} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base">
                  Fork no GitHub
                </Button>
              </a>
              <a href="/roadmap">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Ver Roadmap
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <PublicFooter />
    </div>
  )
}
