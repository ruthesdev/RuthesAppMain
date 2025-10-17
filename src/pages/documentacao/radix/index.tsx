import { DocumentationLayout } from '@/components/documentation-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DocumentacaoRadix() {
  const components = [
    'Accordion',
    'Alert Dialog',
    'Aspect Ratio',
    'Avatar',
    'Checkbox',
    'Collapsible',
    'Context Menu',
    'Dialog',
    'Dropdown Menu',
    'Hover Card',
    'Label',
    'Menubar',
    'Navigation Menu',
    'Popover',
    'Progress',
    'Radio Group',
    'Scroll Area',
    'Select',
    'Separator',
    'Slider',
    'Switch',
    'Tabs',
    'Toggle',
    'Toggle Group',
    'Tooltip',
  ]

  return (
    <DocumentationLayout
      title="Radix UI"
      description="Componentes acessíveis e unstyled que formam a base do Shadcn/UI"
      currentPath="/documentacao/radix"
    >
      {/* Sobre Radix */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">O que é Radix UI?</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            <strong>Radix UI</strong> é uma biblioteca de componentes primitivos (unstyled), construídos com
            acessibilidade e qualidade em mente. Os componentes são completamente agnósticos ao estilo,
            permitindo que você os estilize com qualquer CSS-in-JS, Tailwind CSS ou qualquer outro framework.
          </p>
          <p>
            Shadcn/UI usa Radix UI como base e adiciona estilos com Tailwind CSS, criando componentes
            bonitos e acessíveis prontos para uso.
          </p>
        </div>
      </section>

      {/* Vantagens */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Vantagens do Radix UI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Acessível', desc: 'WCAG e ARIA compliant' },
            { title: 'Unstyled', desc: 'Controle total sobre styling' },
            { title: 'Composável', desc: 'Componentes que trabalham bem juntos' },
            { title: 'Type Safe', desc: 'TypeScript first' },
            { title: 'Performance', desc: 'Otimizado para performance' },
            { title: 'Bem Testado', desc: 'Cobertura de testes completa' },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Componentes Disponíveis */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Componentes Inclusos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {components.map((comp) => (
            <Badge key={comp} variant="secondary" className="justify-center">
              {comp}
            </Badge>
          ))}
        </div>
      </section>

      {/* Acessibilidade */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Acessibilidade</h2>
        <Card>
          <CardHeader>
            <CardTitle>Padrões Seguidos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold text-foreground mb-1">WAI-ARIA</p>
              <p className="text-sm text-muted-foreground">
                Atributos ARIA corretos para assistive technologies
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">WCAG 2.1</p>
              <p className="text-sm text-muted-foreground">
                Conformidade com Web Content Accessibility Guidelines
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Navegação por Teclado</p>
              <p className="text-sm text-muted-foreground">
                Suporte completo para navegação apenas com teclado
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Screen Readers</p>
              <p className="text-sm text-muted-foreground">
                Totalmente compatível com leitores de tela
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Como Usar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Como Usar no RuthesApp</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            No RuthesApp, você não trabalha diretamente com Radix UI. Em vez disso, use os componentes
            Shadcn/UI que já vêm estilizados e prontos para uso:
          </p>
        </div>

        <div className="bg-card border rounded-lg p-4 overflow-x-auto my-4">
          <p className="text-xs text-muted-foreground mb-2">Use Shadcn/UI (recomendado):</p>
          <pre className="text-sm text-muted-foreground">
{`import { Button } from "@/components/ui/button"

function MyComponent() {
  return <Button>Clique aqui</Button>
}`}
          </pre>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Se precisar customizar muito, você pode trabalhar diretamente com Radix UI, mas geralmente
          os componentes Shadcn/UI já são suficientes.
        </p>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Recursos Úteis</h2>
        <div className="space-y-3">
          <a
            href="https://www.radix-ui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-card/50 transition-colors"
          >
            <p className="font-semibold text-primary">Documentação Oficial Radix UI</p>
            <p className="text-sm text-muted-foreground">www.radix-ui.com</p>
          </a>
        </div>
      </section>
    </DocumentationLayout>
  )
}
