import { DocumentationLayout } from '@/components/documentation-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DocumentacaoShadcn() {
  const components = [
    { name: 'Button', category: 'Form' },
    { name: 'Input', category: 'Form' },
    { name: 'Textarea', category: 'Form' },
    { name: 'Select', category: 'Form' },
    { name: 'Checkbox', category: 'Form' },
    { name: 'Radio Group', category: 'Form' },
    { name: 'Switch', category: 'Form' },
    { name: 'Toggle', category: 'Form' },
    { name: 'Card', category: 'Layout' },
    { name: 'Container', category: 'Layout' },
    { name: 'Separator', category: 'Layout' },
    { name: 'Aspect Ratio', category: 'Layout' },
    { name: 'Skeleton', category: 'Layout' },
    { name: 'Empty State', category: 'Layout' },
    { name: 'Tabs', category: 'Navigation' },
    { name: 'Breadcrumb', category: 'Navigation' },
    { name: 'Pagination', category: 'Navigation' },
    { name: 'Navigation Menu', category: 'Navigation' },
    { name: 'Menubar', category: 'Navigation' },
    { name: 'Dialog', category: 'Overlay' },
    { name: 'Drawer', category: 'Overlay' },
    { name: 'Popover', category: 'Overlay' },
    { name: 'Hover Card', category: 'Overlay' },
    { name: 'Context Menu', category: 'Overlay' },
    { name: 'Dropdown Menu', category: 'Overlay' },
    { name: 'Alert Dialog', category: 'Overlay' },
    { name: 'Sheet', category: 'Overlay' },
    { name: 'Tooltip', category: 'Overlay' },
    { name: 'Table', category: 'Data Display' },
    { name: 'Accordion', category: 'Data Display' },
    { name: 'Collapsible', category: 'Data Display' },
    { name: 'Progress', category: 'Data Display' },
    { name: 'Slider', category: 'Data Display' },
    { name: 'Calendar', category: 'Data Display' },
    { name: 'Carousel', category: 'Data Display' },
    { name: 'Alert', category: 'Feedback' },
    { name: 'Badge', category: 'Feedback' },
    { name: 'Avatar', category: 'Feedback' },
    { name: 'Command', category: 'Other' },
    { name: 'Scroll Area', category: 'Other' },
  ]

  return (
    <DocumentationLayout
      title="Shadcn/UI"
      description="40+ componentes UI de alta qualidade, reutilizáveis e customizáveis"
      currentPath="/documentacao/shadcn"
    >
      {/* Sobre Shadcn/UI */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">O que é Shadcn/UI?</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            <strong>Shadcn/UI</strong> é uma coleção de componentes React reutilizáveis, construídos com
            Radix UI e Tailwind CSS. Todos os componentes são copiados para seu projeto, permitindo
            customização total sem necessidade de gerenciar dependências.
          </p>
          <p>
            Ao contrário de component libraries tradicionais, Shadcn/UI fornece os componentes como
            código fonte, permitindo que você controle completamente o styling e comportamento.
          </p>
        </div>
      </section>

      {/* Vantagens */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Vantagens do Shadcn/UI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Customizável', desc: 'Todos os componentes estão em seu código' },
            { title: 'Sem Dependências Extras', desc: 'Apenas React, Radix UI e Tailwind' },
            { title: 'Acessível', desc: 'Baseado em Radix UI com WCAG compliance' },
            { title: 'TypeScript Ready', desc: 'Totalmente tipado com TypeScript' },
            { title: 'Reutilizável', desc: 'Copie, cole e customize conforme necessário' },
            { title: 'Bem Documentado', desc: 'Documentação clara e exemplos' },
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
        <h2 className="text-2xl font-bold text-foreground mb-6">Componentes Disponíveis</h2>
        
        <div className="space-y-6">
          {['Form', 'Layout', 'Navigation', 'Overlay', 'Data Display', 'Feedback', 'Other'].map((category) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {components
                  .filter((comp) => comp.category === category)
                  .map((comp) => (
                    <Badge key={comp.name} variant="secondary" className="justify-center">
                      {comp.name}
                    </Badge>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como Usar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Como Usar</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            Usar componentes Shadcn/UI é simples. Cada componente está localizado em
            <code className="bg-card px-2 py-1 rounded">src/components/ui/</code>
          </p>
        </div>

        <div className="bg-card border rounded-lg p-4 overflow-x-auto my-4">
          <p className="text-xs text-muted-foreground mb-2">Importar um componente:</p>
          <pre className="text-sm text-muted-foreground">
{`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Clique em mim</Button>
}`}
          </pre>
        </div>
      </section>

      {/* Customização */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Customização</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Personalizar Componentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Como todos os componentes estão em seu código, você pode:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-4">
              <li>✓ Modificar o visual com Tailwind CSS</li>
              <li>✓ Adicionar novas propriedades ou comportamentos</li>
              <li>✓ Estender componentes existentes</li>
              <li>✓ Adaptar para suas necessidades específicas</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Estrutura */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Estrutura de Pastas</h2>
        <div className="bg-card border rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-muted-foreground">
{`src/components/
├── ui/
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── tabs.tsx
│   ├── form.tsx
│   └── ... (40+ componentes)
├── mode-toggle.tsx
└── theme-provider.tsx`}
          </pre>
        </div>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Recursos Úteis</h2>
        <div className="space-y-3">
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-card/50 transition-colors"
          >
            <p className="font-semibold text-primary">Documentação Oficial Shadcn/UI</p>
            <p className="text-sm text-muted-foreground">ui.shadcn.com</p>
          </a>
          <a
            href="https://www.radix-ui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-card/50 transition-colors"
          >
            <p className="font-semibold text-primary">Documentação Radix UI</p>
            <p className="text-sm text-muted-foreground">www.radix-ui.com</p>
          </a>
        </div>
      </section>
    </DocumentationLayout>
  )
}
