import type { ColumnDef } from "@tanstack/react-table"
import { DashboardLayout } from "@/layouts/dashboard-layout"
import { appConfig } from "@/config/app.config"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2 } from "lucide-react"
import { RuthesAppTable } from "@/components/ruthesapp"
import * as React from "react"

interface Usuario {
  id: number
  nome: string
  email: string
  role: string
  status: "Ativo" | "Inativo"
}

const USUARIOS_INICIAIS: Usuario[] = [
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
    {
      id: 5,
      nome: "Carlos Ferreira",
      email: "carlos@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 6,
      nome: "Fernanda Silva",
      email: "fernanda@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 7,
      nome: "Roberto Lima",
      email: "roberto@example.com",
      role: "Admin",
      status: "Inativo",
    },
    {
      id: 8,
      nome: "Patricia Gomes",
      email: "patricia@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 9,
      nome: "Lucas Santos",
      email: "lucas@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 10,
      nome: "Juliana Martins",
      email: "juliana@example.com",
      role: "Admin",
      status: "Ativo",
    },
    {
      id: 11,
      nome: "Matheus Costa",
      email: "matheus@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 12,
      nome: "Amanda Rocha",
      email: "amanda@example.com",
      role: "Editor",
      status: "Inativo",
    },
    {
      id: 13,
      nome: "Felipe Alves",
      email: "felipe@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 14,
      nome: "Beatriz Lima",
      email: "beatriz@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 15,
      nome: "Diego Pereira",
      email: "diego@example.com",
      role: "Admin",
      status: "Ativo",
    },
    {
      id: 16,
      nome: "Camila Oliveira",
      email: "camila@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 17,
      nome: "Gustavo Silva",
      email: "gustavo@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 18,
      nome: "Renata Santos",
      email: "renata@example.com",
      role: "Viewer",
      status: "Inativo",
    },
    {
      id: 19,
      nome: "Bruno Costa",
      email: "bruno@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 20,
      nome: "Larissa Martins",
      email: "larissa@example.com",
      role: "Admin",
      status: "Ativo",
    },
    {
      id: 21,
      nome: "Rafael Gomes",
      email: "rafael@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 22,
      nome: "Sophia Alves",
      email: "sophia@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 23,
      nome: "Thiago Lima",
      email: "thiago@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 24,
      nome: "Isabella Rocha",
      email: "isabella@example.com",
      role: "Editor",
      status: "Inativo",
    },
    {
      id: 25,
      nome: "Victor Pereira",
      email: "victor@example.com",
      role: "Admin",
      status: "Ativo",
    },
    {
      id: 26,
      nome: "Mariana Silva",
      email: "mariana@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 27,
      nome: "Leonardo Costa",
      email: "leonardo@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 28,
      nome: "Valentina Santos",
      email: "valentina@example.com",
      role: "Viewer",
      status: "Ativo",
    },
    {
      id: 29,
      nome: "Henrique Martins",
      email: "henrique@example.com",
      role: "Editor",
      status: "Ativo",
    },
    {
      id: 30,
      nome: "Gabriela Oliveira",
      email: "gabriela@example.com",
      role: "Admin",
      status: "Inativo",
    },
  ]

export function DashboardUsuarios() {
  const [usuariosData, setUsuariosData] = React.useState<Usuario[]>(USUARIOS_INICIAIS)
  const [searchTerm, setSearchTerm] = React.useState("")

  // Filtrar dados baseado na busca
  const usuariosFiltrados = usuariosData.filter((usuario) =>
    usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const columns: ColumnDef<Usuario>[] = [
    {
      accessorKey: "nome",
      header: "Nome",
      cell: ({ row }) => (
        <div className="font-medium text-foreground">{row.original.nome}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="text-sm text-muted-foreground">{row.original.email}</div>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <div className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium w-fit">
          {row.original.role}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div
          className={`px-2 py-1 rounded text-xs font-medium w-fit ${
            row.original.status === "Ativo"
              ? "bg-green-500/10 text-green-700 dark:text-green-400"
              : "bg-gray-500/10 text-gray-700 dark:text-gray-400"
          }`}
        >
          {row.original.status}
        </div>
      ),
    },
    {
      id: "actions",
      header: "Ações",
      cell: () => (
        <>
          <div className="flex gap-2 items-center cursor-pointer hover:bg-muted p-2 rounded text-sm">
            <Edit className="h-4 w-4" />
            <span>Editar</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer text-destructive hover:bg-muted p-2 rounded text-sm">
            <Trash2 className="h-4 w-4" />
            <span>Deletar</span>
          </div>
        </>
      ),
    },
  ]

  return (
    <DashboardLayout userName={appConfig.app.defaultUserName} pageTitle="Usuários">
      <div className="space-y-8">
        {/* Users Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <CardTitle>Lista de Usuários</CardTitle>
                <CardDescription>
                  Total de {usuariosData.length} usuários cadastrados
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <RuthesAppTable
              columns={columns}
              data={usuariosFiltrados}
              onDataChange={setUsuariosData}
              isReorderable={true}
              searchValue={searchTerm}
              onSearchChange={setSearchTerm}
              searchPlaceholder="Buscar por nome ou email..."
              addButton={
                <Button variant="default" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Usuário
                </Button>
              }
              pagination={{ pageSize: 10 }}
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
