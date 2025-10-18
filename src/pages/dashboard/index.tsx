import { DashboardLayout } from "@/layouts/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, Bell, Lock, ArrowRight } from "lucide-react"

export function Dashboard() {
  const stats = [
    {
      title: "Total de Usuários",
      value: "1,234",
      description: "+12% desde o último mês",
      icon: Users,
      href: "/dashboard/usuarios",
    },
    {
      title: "Notificações",
      value: "23",
      description: "5 não lidas",
      icon: Bell,
      href: "/dashboard/notificacoes",
    },
    {
      title: "Permissões Ativas",
      value: "8",
      description: "Roles gerenciadas",
      icon: Lock,
      href: "/dashboard/permissoes",
    },
    {
      title: "Análises",
      value: "3.2K",
      description: "Acessos este mês",
      icon: BarChart3,
      href: "/dashboard/analytics",
    },
  ]

  return (
    <DashboardLayout userName="João Silva" pageTitle="Dashboard">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo ao painel administrativo do RuthesApp
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                  <a href={stat.href}>
                    <Button variant="ghost" size="sm" className="mt-3 -ml-2">
                      Ver mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Recent Activity */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>
                Últimas ações no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium">Novo usuário criado</p>
                    <p className="text-sm text-muted-foreground">Maria Silva</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Há 2 horas</p>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium">Permissão alterada</p>
                    <p className="text-sm text-muted-foreground">João Santos</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Há 4 horas</p>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Sistema atualizado</p>
                    <p className="text-sm text-muted-foreground">v1.3.0</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Há 1 dia</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
