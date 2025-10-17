import { DocumentationLayout } from '@/components/documentation-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Package, Code2, Palette, Zap, GitBranch } from 'lucide-react'

export default function DocumentacaoIndex() {
  const stacks = [
    {
      name: 'Vite',
      description: 'Build tool extremamente rápido e otimizado',
      icon: <Zap className="h-6 w-6" />,
      status: 'v4.4.0+',
      path: '/documentacao/vite',
    },
    {
      name: 'React',
      description: 'Library para construir interfaces com componentes',
      icon: <Code2 className="h-6 w-6" />,
      status: 'v19.1.1',
      path: '/documentacao/react',
    },
    {
      name: 'TypeScript',
      description: 'Tipagem estática para JavaScript seguro',
      icon: <Code2 className="h-6 w-6" />,
      status: 'v5.x',
      path: '/documentacao/typescript',
    },
    {
      name: 'Tailwind CSS',
      description: 'Framework CSS utilitário para estilização',
      icon: <Palette className="h-6 w-6" />,
      status: 'v4.1.14',
      path: '/documentacao/tailwind',
    },
    {
      name: 'Radix UI',
      description: 'Componentes acessíveis e sem estilo',
      icon: <Package className="h-6 w-6" />,
      status: 'Latest',
      path: '/documentacao/radix',
    },
    {
      name: 'Shadcn/UI',
      description: '40+ componentes UI reutilizáveis',
      icon: <GitBranch className="h-6 w-6" />,
      status: '40+',
      path: '/documentacao/shadcn',
    },
  ]

  return (
    <DocumentationLayout
      title="Documentação RuthesApp"
      description="Visão geral completa do boilerplate e sua stack tecnológica"
      currentPath="/documentacao"
    >
      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Desenvolvedor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-foreground">RuthesDev</p>
            <a
              href="https://ruthes.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm mt-2 inline-block"
            >
              ruthes.dev →
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Repositório</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-foreground">GitHub</p>
            <a
              href="https://github.com/ruthesdev/RuthesAppMain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm mt-2 inline-block"
            >
              Ver no GitHub →
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Versão</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-foreground">1.0.0</p>
            <Badge className="mt-2">Produção</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Sobre o Projeto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Sobre o RuthesApp</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
          <p>
            <strong>RuthesApp</strong> é um boilerplate profissional e completo para iniciar projetos React modernos.
            Desenvolvido com as melhores práticas de desenvolvimento web, oferece uma base sólida e reutilizável
            para acelerar o desenvolvimento de novas aplicações.
          </p>
          <p>
            O projeto foi projetado para ser:
          </p>
          <ul className="space-y-2 ml-4">
            <li>✅ <strong>Reutilizável</strong> - Clone e comece um novo projeto em minutos</li>
            <li>✅ <strong>Modular</strong> - Estrutura bem organizada e escalável</li>
            <li>✅ <strong>Profissional</strong> - Stack moderno e atualizado</li>
            <li>✅ <strong>Acessível</strong> - 40+ componentes UI prontos</li>
            <li>✅ <strong>Documentado</strong> - Guias completos e exemplos</li>
          </ul>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Stack Tecnológico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((stack) => (
            <a key={stack.name} href={stack.path}>
              <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary">{stack.icon}</div>
                    <Badge variant="outline">{stack.status}</Badge>
                  </div>
                  <CardTitle>{stack.name}</CardTitle>
                  <CardDescription>{stack.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary text-sm font-semibold">
                    Saiba mais <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Componentes UI */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Componentes UI Disponíveis</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            O RuthesApp inclui mais de 40 componentes UI prontos para uso, todos construídos com Shadcn/UI
            e Radix UI, garantindo acessibilidade e flexibilidade.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {[
              'Button',
              'Card',
              'Input',
              'Dialog',
              'Dropdown',
              'Tabs',
              'Form',
              'Select',
              'Checkbox',
              'Radio',
              'Switch',
              'Toast',
              'Alert',
              'Badge',
              'Avatar',
              'Table',
              'Accordion',
              'Popover',
              'Tooltip',
              'Breadcrumb',
              'Pagination',
              'Drawer',
              'Modal',
              'Menu',
            ].map((comp) => (
              <Badge key={comp} variant="secondary" className="text-xs justify-center">
                {comp}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Características Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">🎨 Tema Escuro/Claro</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de tema automático com persistência de preferência do usuário
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">📱 Totalmente Responsivo</h3>
              <p className="text-sm text-muted-foreground">
                Design adaptável para qualquer tamanho de tela
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">🔒 Type Safety</h3>
              <p className="text-sm text-muted-foreground">
                TypeScript pré-configurado para máxima segurança
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">⚡ Performance Otimizada</h3>
              <p className="text-sm text-muted-foreground">
                Build rápido com Vite e HMR para desenvolvimento ágil
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">✨ Acessibilidade</h3>
              <p className="text-sm text-muted-foreground">
                Componentes construídos com WCAG em mente
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">📦 Pronto para Produção</h3>
              <p className="text-sm text-muted-foreground">
                ESLint, TypeScript e boas práticas pré-configuradas
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocumentationLayout>
  )
}
