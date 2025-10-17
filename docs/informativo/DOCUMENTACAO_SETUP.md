# 📚 Documentação - Página de Referência do RuthesApp

## 📍 Estrutura de Páginas

O projeto agora possui uma seção completa de documentação com múltiplas páginas relacionadas ao stack tecnológico utilizado.

### Páginas Criadas

```
/src/pages/documentacao/
├── index.tsx           # Página inicial da documentação
├── vite/
│   └── index.tsx       # Documentação do Vite
├── react/
│   └── index.tsx       # Documentação do React
├── typescript/
│   └── index.tsx       # Documentação do TypeScript
├── tailwind/
│   └── index.tsx       # Documentação do Tailwind CSS
├── radix/
│   └── index.tsx       # Documentação do Radix UI
└── shadcn/
    └── index.tsx       # Documentação do Shadcn/UI
```

## 🎨 Componentes Utilizados

### DocumentationLayout
Um componente wrapper responsivo que fornece:

- **Header** com navegação e links para GitHub/Portfólio
- **Sidebar** com navegação entre as páginas de documentação
- **Main Content Area** para conteúdo principal
- **Footer** com informações do desenvolvedor
- **Dark/Light Theme** automático usando o sistema de tema do projeto

```tsx
import { DocumentationLayout } from '@/components/documentation-layout'

export default function MyDocPage() {
  return (
    <DocumentationLayout
      title="Título da Página"
      description="Descrição breve"
      currentPath="/documentacao/exemplo"
    >
      {/* Conteúdo aqui */}
    </DocumentationLayout>
  )
}
```

## 📄 Páginas de Documentação

### 1. **Documentação - Visão Geral** (`/documentacao`)
Página inicial que contém:
- Informações do desenvolvedor (RuthesDev)
- Repositório e links externos
- Visão geral de todos os stacks
- Características principais do projeto

### 2. **Vite** (`/documentacao/vite`)
Documenta:
- O que é Vite
- Configuração atual do projeto
- Scripts disponíveis
- Performance e otimizações

### 3. **React** (`/documentacao/react`)
Contém:
- Informações sobre React 19
- Estrutura de componentes
- Padrões recomendados
- Hooks e boas práticas

### 4. **TypeScript** (`/documentacao/typescript`)
Aborda:
- Configuração do TypeScript
- Arquivos de configuração (tsconfig.json, etc)
- Boas práticas de tipagem
- Exemplos de código

### 5. **Tailwind CSS** (`/documentacao/tailwind`)
Explica:
- Sistema de cores com CSS Variables
- Breakpoints responsivos
- Classes utilitárias
- Exemplos de uso

### 6. **Radix UI** (`/documentacao/radix`)
Descreve:
- O que é Radix UI
- Vantagens e acessibilidade
- Componentes inclusos
- Como usar com Shadcn/UI

### 7. **Shadcn/UI** (`/documentacao/shadcn`)
Apresenta:
- Os 40+ componentes disponíveis
- Como usar e customizar
- Estrutura de pasta dos componentes
- Recursos úteis

## 🔗 Navegação

### Links na Home
- "Documentação" → `/documentacao`
- "Ver Documentação" (CTA) → `/documentacao`

### Links na Sidebar
Cada página de documentação possui uma sidebar com links para todas as outras páginas:
- Visão Geral
- Vite
- React
- TypeScript
- Tailwind CSS
- Radix UI
- Shadcn/UI

### Links Externos
- GitHub → `https://github.com/ruthesdev/RuthesAppMain`
- Portfólio do Dev → `https://ruthes.dev`

## 🎨 Styling

Todas as páginas utilizam:
- **Classes Tailwind CSS** para layout e styling
- **Componentes UI** do Shadcn/UI (Button, Card, Badge, etc)
- **Sistema de tema** do projeto (dark/light)
- **Variáveis CSS** para cores

```tsx
// Exemplo de página responsiva
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards responsivos */}
</div>
```

## 📱 Responsividade

Todas as páginas são totalmente responsivas:

- **Mobile**: Layout linear, sidebar como layer
- **Tablet**: Sidebar à esquerda, conteúdo ao lado
- **Desktop**: Layout completo otimizado

## 🔄 Roteamento

O projeto usa um sistema simples de roteamento baseado em `window.location.pathname`:

```tsx
// App.tsx
const renderPage = () => {
  switch (currentPath) {
    case '/documentacao':
      return <DocumentacaoIndex />
    case '/documentacao/vite':
      return <DocumentacaoVite />
    // ... etc
  }
}
```

**Nota**: Para manter a compatibilidade com Single Page App, certifique-se de que o servidor redireciona todas as rotas para `index.html` em produção.

## 🚀 Como Usar

### Acessar a Documentação
1. Clique em "Documentação" na navbar da Home
2. Ou acesse diretamente: `/documentacao`
3. Use a sidebar para navegar entre as páginas

### Adicionar Novas Páginas
1. Crie pasta em `/src/pages/documentacao/nova-tecnologia/`
2. Crie arquivo `index.tsx`
3. Use o template `DocumentationLayout`
4. Adicione a rota no `App.tsx`
5. Atualize a sidebar no `DocumentationLayout`

## 📚 Informações do Desenvolvedor

**Nome**: RuthesDev  
**Portfólio**: https://ruthes.dev  
**GitHub**: https://github.com/ruthesdev  
**Repositório**: https://github.com/ruthesdev/RuthesAppMain

## 🎯 Próximos Passos

- [ ] Adicionar exemplos interativos de componentes
- [ ] Criar página de changelog
- [ ] Adicionar guias de instalação e setup
- [ ] Integrar com sistema de search
- [ ] Adicionar versioning da documentação

---

**Última atualização**: 17 de outubro de 2025  
**Desenvolvido para**: RuthesApp v1.0.0
