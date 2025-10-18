import { DocumentationLayout } from '@/components/documentation-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DocumentacaoTypeScript() {
  return (
    <DocumentationLayout
      title="TypeScript"
      description="Superset de JavaScript que adiciona tipagem estática e melhor experiência de desenvolvimento"
      currentPath="/documentacao/typescript"
    >
      {/* Sobre TypeScript */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">O que é TypeScript?</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            <strong>TypeScript</strong> é um superset de JavaScript que adiciona tipagem estática opcional.
            Permite que você escreva código mais seguro, com melhor autocompletar do IDE e detecção de erros
            em tempo de desenvolvimento.
          </p>
        </div>
      </section>

      {/* Status do Projeto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Configuração TypeScript</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Versão e Config</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Versão TS</span>
                <Badge>v5.x</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Target</span>
                <Badge variant="outline">ES2020</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Module</span>
                <Badge variant="outline">ESNext</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Configurações Ativas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Strict mode</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">JSX support</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Module resolution</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Path aliases</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arquivos de Configuração */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Arquivos de Configuração</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">tsconfig.json</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Configuração base do TypeScript</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">tsconfig.app.json</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Configuração específica da aplicação</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">tsconfig.node.json</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Configuração para arquivos Node (vite.config, etc)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Boas Práticas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Boas Práticas TypeScript</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Tipagem de Props</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-background border rounded p-2 md:p-3 text-xs md:text-sm overflow-x-auto">
                <pre className="text-muted-foreground whitespace-pre">
{`interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

function Button({ 
  children, 
  onClick, 
  disabled 
}: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  )
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Tipos Utilitários</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use tipos utilitários como Pick, Omit, Partial, Required para manipular tipos existentes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Evitar Any</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Nunca use `any`. Use `unknown` se realmente não sabe o tipo, ou tipifique corretamente.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Recursos Úteis</h2>
        <div className="space-y-3">
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-card/50 transition-colors"
          >
            <p className="font-semibold text-primary">Documentação Oficial TypeScript</p>
            <p className="text-sm text-muted-foreground">typescriptlang.org</p>
          </a>
        </div>
      </section>
    </DocumentationLayout>
  )
}
