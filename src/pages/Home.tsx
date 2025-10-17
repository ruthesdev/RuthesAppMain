import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  GitFork,
  Zap,
  Package,
  Code2,
  Palette,
  Cpu,
  ArrowRight,
  ExternalLink
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Header/Navbar */}
      <header className="w-full border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">
              RuthesApp
            </h1>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Componentes
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentação
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button>Clone Agora</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            RuthesApp Boilerplate
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto px-4">
            Seu ponto de partida para projetos React modernos e escaláveis
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 mb-8 max-w-3xl mx-auto px-4">
            Uma base sólida e reutilizável com componentes UI personalizáveis, tema escuro/claro, TypeScript e Tailwind CSS. Clone, customize e desenvolva seu próximo projeto em minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button size="lg" className="w-full sm:w-auto text-base">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
              Ver no GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Stack Completo e Moderno
        </h3>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle>React 19 + TypeScript</CardTitle>
              <CardDescription>
                Desenvolvimento moderno e type-safe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Utiliza as últimas versões do React com suporte completo a TypeScript para maior segurança e manutenibilidade do código.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Aprender
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Palette className="h-6 w-6" />
              </div>
              <CardTitle>Tailwind CSS + Tema</CardTitle>
              <CardDescription>
                Componentes estilizados e personalizáveis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mais de 30 componentes UI pré-construídos com Tailwind CSS, com suporte completo para tema escuro e claro.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Explorar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Package className="h-6 w-6" />
              </div>
              <CardTitle>Radix UI + Shadcn</CardTitle>
              <CardDescription>
                Componentes acessíveis e sem estilo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Componentes de alta qualidade baseados em Radix UI, garantindo acessibilidade e compatibilidade total.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Explorar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code2 className="h-6 w-6" />
              </div>
              <CardTitle>Vite + HMR</CardTitle>
              <CardDescription>
                Desenvolvimento rápido e bundling otimizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Build tool moderno com Hot Module Replacement para experiência de desenvolvimento superior e builds rápidos.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Explorar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cpu className="h-6 w-6" />
              </div>
              <CardTitle>ESLint Configurado</CardTitle>
              <CardDescription>
                Qualidade de código garantida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Configuração completa de linting com ESLint para manter a qualidade e consistência do código em todo o projeto.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Explorar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GitFork className="h-6 w-6" />
              </div>
              <CardTitle>Pronto para Clonar</CardTitle>
              <CardDescription>
                Extensível e reutilizável
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Estrutura modular e bem organizada que facilita clonar o projeto como ponto de partida para novos desenvolvimentos.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Explorar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <div className="w-full max-w-5xl mx-auto">
          <Card className="bg-primary border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl text-primary-foreground mb-4">
                Acelere seu Desenvolvimento
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-base md:text-lg">
                Clone o RuthesApp e comece um novo projeto em minutos com uma base sólida, componentes reutilizáveis e boas práticas.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base">
                Clone o Repositório
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Ver Documentação
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-card/50 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">RuthesApp</h4>
              <p className="text-sm text-muted-foreground">
                Boilerplate moderno para React com TypeScript e Tailwind CSS
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Stack</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">React 19</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">TypeScript</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Tailwind CSS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Componentes</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Exemplos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discussões</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 RuthesApp. Código aberto e disponível para todos os desenvolvimentos.
          </div>
        </div>
      </footer>
    </div>
  )
}
