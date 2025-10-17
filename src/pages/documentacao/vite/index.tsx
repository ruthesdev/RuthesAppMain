import { DocumentationLayout } from '@/components/documentation-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DocumentacaoVite() {
  return (
    <DocumentationLayout
      title="Vite"
      description="Build tool extremamente rápido com Hot Module Replacement para desenvolvimento ágil"
      currentPath="/documentacao/vite"
    >
      {/* Sobre Vite */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">O que é Vite?</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            <strong>Vite</strong> é um build tool moderno que oferece experiência de desenvolvimento superior e builds
            extremamente rápidos. Utiliza ES modules natively e oferece Hot Module Replacement (HMR) para atualização
            instantânea do código durante desenvolvimento.
          </p>
        </div>
      </section>

      {/* Status do Projeto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Status Atual do Projeto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Configuração</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Versão Vite</span>
                <Badge>v4.4.0+</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">React Plugin</span>
                <Badge>@vitejs/plugin-react-swc</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tailwind Integration</span>
                <Badge variant="outline">@tailwindcss/vite</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Features Ativadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Hot Module Replacement (HMR)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Fast Refresh com SWC</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Otimização de build</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Path aliases (@)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Configuração */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Configuração do Vite</h2>
        <div className="bg-card border rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-muted-foreground">
{`import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`}
          </pre>
        </div>
      </section>

      {/* Scripts Disponíveis */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Scripts Disponíveis</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">npm run dev</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Inicia o servidor de desenvolvimento com HMR na porta 5173
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">npm run build</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cria um build otimizado para produção no diretório dist/
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">npm run preview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Faz preview do build de produção localmente
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">npm run lint</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Executa ESLint para verificar qualidade do código
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Performance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Performance</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            O Vite oferece performance excepcional em comparação com bundlers tradicionais:
          </p>
          <ul className="space-y-2 ml-4">
            <li>⚡ <strong>Dev Server Rápido</strong> - Inicia em menos de 1 segundo</li>
            <li>🔥 <strong>HMR Instantâneo</strong> - Atualizações de módulo em milissegundos</li>
            <li>📦 <strong>Build Otimizado</strong> - Usa Rollup para production bundles eficientes</li>
            <li>🎯 <strong>Code Splitting</strong> - Divisão automática de código</li>
          </ul>
        </div>
      </section>

      {/* Otimizações */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Otimizações Aplicadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>✓ Native ES modules</div>
              <div>✓ Unbundled development</div>
              <div>✓ Instant HMR updates</div>
              <div>✓ SWC transpilation</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Production</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>✓ Minificação automática</div>
              <div>✓ Tree-shaking</div>
              <div>✓ Lazy code-splitting</div>
              <div>✓ Assets optimization</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </DocumentationLayout>
  )
}
