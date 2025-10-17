import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import { DonationDialog } from "@/components/donation-dialog"
import {
  LogIn,
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  BarChart3,
  Lock,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Rocket,
} from "lucide-react"

export default function Roadmap() {
  const roadmapItems = [
    {
      id: 1,
      title: "Sistema de Login",
      description: "Autenticação com JWT, suporte a OAuth2, esqueceu a senha e verificação de email",
      icon: LogIn,
      status: "planejado", // planejado, em-progresso, concluido
      quarter: "Q4 2025",
      features: [
        "Autenticação com JWT",
        "OAuth2 (Google, GitHub)",
        "2FA (Two-Factor Authentication)",
        "Recuperação de senha",
        "Verificação de email"
      ]
    },
    {
      id: 2,
      title: "Dashboard Principal",
      description: "Interface de painel de controle com widgets, gráficos e análises em tempo real",
      icon: LayoutDashboard,
      status: "planejado",
      quarter: "Q4 2025",
      features: [
        "Dashboard responsivo",
        "Widgets customizáveis",
        "Gráficos interativos",
        "Análise de dados",
        "Exportação de relatórios"
      ]
    },
    {
      id: 3,
      title: "Gestão de Usuários",
      description: "Painel administrativo para gerenciar usuários, permissões e roles",
      icon: Users,
      status: "planejado",
      quarter: "Q1 2026",
      features: [
        "CRUD de usuários",
        "Sistema de roles/permissões",
        "Gestão de equipes",
        "Auditoria de ações",
        "Bulk operations"
      ]
    },
    {
      id: 4,
      title: "Sistema de Notificações",
      description: "Notificações em tempo real via WebSocket, email e push notifications",
      icon: Bell,
      status: "planejado",
      quarter: "Q1 2026",
      features: [
        "Notificações em tempo real",
        "Email notifications",
        "Push notifications",
        "Preferências do usuário",
        "Centro de notificações"
      ]
    },
    {
      id: 5,
      title: "Painel de Configurações",
      description: "Área de configurações de usuário, preferências e integração com APIs",
      icon: Settings,
      status: "planejado",
      quarter: "Q1 2026",
      features: [
        "Perfil do usuário",
        "Preferências de tema",
        "Integrações com APIs",
        "Webhooks",
        "API Keys"
      ]
    },
    {
      id: 6,
      title: "Analytics & Relatórios",
      description: "Sistema completo de analytics, dashboards de dados e geração de relatórios",
      icon: BarChart3,
      status: "planejado",
      quarter: "Q2 2026",
      features: [
        "Rastreamento de eventos",
        "Análise de dados",
        "Relatórios personalizados",
        "Exportação de dados",
        "Integração com ferramentas"
      ]
    },
    {
      id: 7,
      title: "Segurança Avançada",
      description: "Rate limiting, CORS, proteção contra ataques e conformidade com GDPR",
      icon: Lock,
      status: "planejado",
      quarter: "Q2 2026",
      features: [
        "Rate limiting",
        "CORS avançado",
        "Proteção CSRF",
        "Conformidade GDPR",
        "Criptografia de dados"
      ]
    },
    {
      id: 8,
      title: "Performance & Otimizações",
      description: "Lazy loading, code splitting, service workers e otimizações de SEO",
      icon: Zap,
      status: "planejado",
      quarter: "Q2 2026",
      features: [
        "Lazy loading de componentes",
        "Code splitting automático",
        "Service Workers",
        "Otimizações de SEO",
        "Cache inteligente"
      ]
    },
  ]

  const statusConfig = {
    concluido: {
      label: "Concluído",
      color: "bg-green-100 text-green-800",
      icon: CheckCircle,
    },
    "em-progresso": {
      label: "Em Progresso",
      color: "bg-blue-100 text-blue-800",
      icon: Rocket,
    },
    planejado: {
      label: "Planejado",
      color: "bg-gray-100 text-gray-800",
      icon: Clock,
    },
  }

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Header/Navbar */}
      <header className="w-full border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <h1 className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
                RuthesApp
              </h1>
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-primary">
                Roadmap
              </a>
              <a href="/documentacao" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentação
              </a>
              <a href="https://github.com/ruthesdev/RuthesAppMain" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <a href="https://github.com/ruthesdev/RuthesAppMain/fork" target="_blank" rel="noopener noreferrer">
                <Button>Fork Agora</Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Roadmap 🗺️
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-2 max-w-3xl mx-auto px-4">
            Conheça as atualizações futuras e novas funcionalidades planejadas para o RuthesApp
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 mb-8 max-w-3xl mx-auto px-4">
            Estamos continuamente evoluindo o boilerplate com novas features. Veja abaixo o que está planejado e o que está em desenvolvimento.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Legend */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 p-6 bg-card rounded-lg border">
            {Object.entries(statusConfig).map(([key, config]) => {
              const IconComponent = config.icon
              return (
                <div key={key} className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${config.color}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{config.label}</span>
                </div>
              )
            })}
          </div>

          {/* Roadmap Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapItems.map((item) => {
              const Icon = item.icon
              const Status = statusConfig[item.status as keyof typeof statusConfig]
              const StatusIcon = Status.icon

              return (
                <Card key={item.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className={Status.color}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {Status.label}
                      </Badge>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Funcionalidades
                      </p>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <div className="px-6 py-4 border-t">
                    <p className="text-sm font-semibold text-foreground">{item.quarter}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <div className="w-full max-w-5xl mx-auto">
          <Card className="bg-primary border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl text-primary-foreground mb-4">
                Gostou do RuthesApp?
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-base md:text-lg">
                Se você aprecia este projeto, considere apoiar o desenvolvimento com uma doação via PIX!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <DonationDialog />
              <a href="/">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Voltar para Home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-card/50 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">Desenvolvedor: <a href="https://ruthes.dev" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-foreground transition-colors">RuthesDev</a></p>
            <p>© 2025 RuthesApp. Código aberto e disponível para todos.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
