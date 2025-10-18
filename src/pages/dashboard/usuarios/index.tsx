import { DashboardLayout } from "@/layouts/dashboard-layout"
import { appConfig } from "@/config/app.config"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit, Trash2, MoreVertical } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function DashboardUsuarios() {
  const usuarios = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao@example.com",
      role: "Admin",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 3,
      nome: "Pedro Oliveira",
      email: "pedro@example.com",
      role: "Viewer",
      status: "Inativo",
    },
    {
      id: 4,
      nome: "Ana Costa",
      email: "ana@example.com",
      role: "Editor",
      status: "Ativo",
    },
  ]

  return (
    <DashboardLayout userName={appConfig.app.defaultUserName} pageTitle="Usuários">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Usuários</h1>
            <p className="text-muted-foreground">
              Gerencie todos os usuários do sistema
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Usuário
          </Button>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardHeader>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar usuários..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filtros</Button>
            </div>
          </CardHeader>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Usuários</CardTitle>
            <CardDescription>
              Total de {usuarios.length} usuários cadastrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usuarios.map((usuario) => (
                    <TableRow key={usuario.id}>
                      <TableCell className="font-medium">{usuario.nome}</TableCell>
                      <TableCell>{usuario.email}</TableCell>
                      <TableCell>
                        <div className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium w-fit">
                          {usuario.role}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={`px-2 py-1 rounded text-xs font-medium w-fit ${
                          usuario.status === "Ativo"
                            ? "bg-green-500/10 text-green-700 dark:text-green-400"
                            : "bg-gray-500/10 text-gray-700 dark:text-gray-400"
                        }`}>
                          {usuario.status}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
