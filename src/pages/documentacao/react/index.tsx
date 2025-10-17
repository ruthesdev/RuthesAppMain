import { DocumentationLayout } from '@/components/documentation-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DocumentacaoReact() {
  return (
    <DocumentationLayout
      title="React"
      description="Library moderna para construir interfaces de usuário com componentes reutilizáveis"
      currentPath="/documentacao/react"
    >
      {/* Sobre React */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">O que é React?</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            <strong>React</strong> é uma library JavaScript para construir interfaces de usuário com componentes
            reutilizáveis. Utiliza JSX (JavaScript XML) para criar componentes declarativos que facilitam a construção
            de aplicações complexas.
          </p>
        </div>
      </section>

      {/* Status do Projeto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Status Atual do Projeto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Configuração React</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Versão</span>
                <Badge>v19.1.1</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">React DOM</span>
                <Badge>v19.1.1</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Compilador</span>
                <Badge variant="outline">SWC (Vite)</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Features Disponíveis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Hooks (useState, useEffect, etc)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Context API</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Fast Refresh com HMR</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">StrictMode para development</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Estrutura de Componentes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Estrutura de Componentes</h2>
        <div className="bg-card border rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-muted-foreground">
{`src/
├── components/
│   ├── ui/              # Componentes Shadcn/UI
│   ├── mode-toggle.tsx  # Toggle de tema
│   └── theme-provider.tsx # Provider de tema
├── pages/
│   ├── Home.tsx         # Página inicial
│   └── documentacao/    # Páginas de documentação
├── hooks/
│   └── use-mobile.ts    # Custom hook para mobile
├── lib/
│   └── utils.ts         # Funções utilitárias
└── App.tsx              # Componente raiz`}
          </pre>
        </div>
      </section>

      {/* Padrões de Desenvolvimento */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Padrões Recomendados</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">Componentes Funcionais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Sempre use componentes funcionais com Hooks em vez de class components:
              </p>
              <div className="bg-background border rounded p-2 text-xs">
                <pre className="text-muted-foreground">
{`function MyComponent() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">Context para Estado Global</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use Context API para gerenciar estado que precisa ser compartilhado entre múltiplos componentes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">Reutilize Componentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sempre reutilize componentes Shadcn/UI em vez de criar novos. Customizando conforme necessário.
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
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-card/50 transition-colors"
          >
            <p className="font-semibold text-primary">Documentação Oficial React</p>
            <p className="text-sm text-muted-foreground">react.dev</p>
          </a>
        </div>
      </section>
    </DocumentationLayout>
  )
}
