import { DocumentationLayout } from '@/components/documentation-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DocumentacaoTailwind() {
  return (
    <DocumentationLayout
      title="Tailwind CSS"
      description="Framework CSS utilitário para criar designs modernos sem deixar seu HTML"
      currentPath="/documentacao/tailwind"
    >
      {/* Sobre Tailwind */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">O que é Tailwind CSS?</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            <strong>Tailwind CSS</strong> é um framework CSS utilitário que permite criar designs customizados
            rapidamente. Você compõe elementos usando classes utilitárias pré-existentes, em vez de escrever CSS
            customizado.
          </p>
        </div>
      </section>

      {/* Status do Projeto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Configuração Tailwind</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Versão e Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Versão</span>
                <Badge>v4.1.14</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Plugin Vite</span>
                <Badge variant="outline">@tailwindcss/vite</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">CSS</span>
                <Badge variant="outline">src/index.css</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Features Ativas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Dark mode com next-themes</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">CSS custom properties</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Responsive design</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">Tema customizável</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sistema de Cores */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Sistema de Cores</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Cores CSS Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                O projeto usa CSS custom properties para tema dinâmico:
              </p>
              <div className="bg-background border rounded p-2 text-xs">
                <pre className="text-muted-foreground">
{`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.6% 11.3%;
  --muted-foreground: 215.4 16.3% 46.9%;
  /* ... mais cores ... */
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Classe Utilitárias</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use as classes CSS variables para criar componentes consistentes:
              </p>
              <div className="bg-background border rounded p-2 text-xs mt-2">
                <pre className="text-muted-foreground">
{`<div className="bg-background text-foreground">
  Fundo com cor de background e texto com cor de foreground
</div>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Responsividade */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Breakpoints Responsivos</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2 px-4">Breakpoint</th>
                <th className="text-left py-2 px-4">CSS</th>
                <th className="text-left py-2 px-4">Exemplo</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-2 px-4 text-foreground">sm</td>
                <td className="py-2 px-4 text-muted-foreground">@media (min-width: 640px)</td>
                <td className="py-2 px-4 text-muted-foreground">sm:text-lg</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-foreground">md</td>
                <td className="py-2 px-4 text-muted-foreground">@media (min-width: 768px)</td>
                <td className="py-2 px-4 text-muted-foreground">md:text-xl</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-foreground">lg</td>
                <td className="py-2 px-4 text-muted-foreground">@media (min-width: 1024px)</td>
                <td className="py-2 px-4 text-muted-foreground">lg:text-2xl</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-foreground">xl</td>
                <td className="py-2 px-4 text-muted-foreground">@media (min-width: 1280px)</td>
                <td className="py-2 px-4 text-muted-foreground">xl:text-3xl</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Exemplo de Uso */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Exemplo de Uso</h2>
        <div className="bg-card border rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-muted-foreground">
{`// Exemplo de componente responsivo com Tailwind
function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 rounded-lg bg-card border text-foreground">
        <h2 className="text-lg md:text-xl font-bold">Título</h2>
        <p className="text-sm text-muted-foreground">Descrição</p>
      </div>
    </div>
  )
}`}
          </pre>
        </div>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Recursos Úteis</h2>
        <div className="space-y-3">
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-card/50 transition-colors"
          >
            <p className="font-semibold text-primary">Documentação Oficial Tailwind CSS</p>
            <p className="text-sm text-muted-foreground">tailwindcss.com</p>
          </a>
        </div>
      </section>
    </DocumentationLayout>
  )
}
