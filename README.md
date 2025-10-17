# 🚀 RuthesApp - Boilerplate React Moderno

Um boilerplate profissional e completo para acelerar o desenvolvimento de aplicações React com TypeScript, Tailwind CSS e componentes UI reutilizáveis.

**🌐 Demo ao Vivo**: [ruthesappmain.ruthes.dev](https://ruthesappmain.ruthes.dev)

## ✨ Destaques

- 🎨 **30+ Componentes UI** - Shadcn/UI + Radix UI prontos para usar
- 🌓 **Tema Dark/Light** - Toggle automático com persistência
- 📦 **Vite + React 19** - Build rápido e Hot Module Replacement
- 🎯 **TypeScript** - Type safety em todo o projeto
- 🔧 **ESLint Configurado** - Padrão de código garantido
- 📱 **Totalmente Responsivo** - Funciona em qualquer dispositivo
- ⚡ **Performance Otimizada** - Builds rápidos e bundle pequeno
- 📚 **Documentação Completa** - 7 páginas de documentação
- 🗺️ **Roadmap Transparente** - 8 funcionalidades planejadas

## 🛠️ Stack Tecnológico

| Tecnologia | Propósito |
|------------|----------|
| **React 19** | Framework UI moderno |
| **TypeScript** | Type safety e developer experience |
| **Vite** | Build tool extremamente rápido |
| **Tailwind CSS** | Estilização utilitária |
| **Radix UI** | Componentes acessíveis sem estilo |
| **Shadcn/UI** | Componentes UI de alta qualidade |
| **Next-themes** | Gerenciamento automático de tema |
| **React Hook Form** | Gestão eficiente de formulários |
| **Lucide React** | Biblioteca de ícones SVG |

## 🚀 Quick Start

### Prerequisitos
- Node.js 18+ instalado

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/ruthesapp.git
cd ruthesapp
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Inicie o Desenvolvimento
```bash
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

## 📝 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento com HMR
npm run build    # Build otimizado para produção
npm run lint     # Executa ESLint
npm run preview  # Preview do build de produção
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # 30+ componentes reutilizáveis
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (muitos mais)
│   ├── mode-toggle.tsx        # Toggle tema escuro/claro
│   └── theme-provider.tsx     # Provider de tema
├── pages/
│   └── Home.tsx               # Página inicial
├── hooks/
│   └── use-mobile.ts          # Hook para detecção mobile
├── lib/
│   └── utils.ts               # Funções utilitárias
├── assets/                    # Imagens e recursos
├── App.tsx                    # Componente raiz
├── main.tsx                   # Entrada da aplicação
├── index.css                  # Estilos globais
└── vite-env.d.ts             # Tipos do Vite
```

## 🎨 Componentes Disponíveis

O projeto inclui os seguintes componentes pré-construídos:

**Form & Input:**
- Button, Input, Textarea, Select, Checkbox, Radio Group, Switch, Toggle
- Form, Field, Label, Input OTP, Input Group

**Layout:**
- Card, Container, Separator, Aspect Ratio, Skeleton, Empty State

**Navigation:**
- Tabs, Breadcrumb, Pagination, Navigation Menu, Menubar

**Overlay:**
- Dialog, Drawer, Popover, Hover Card, Context Menu, Dropdown Menu
- Alert Dialog, Sheet, Tooltip

**Data Display:**
- Table, Accordion, Collapsible, Progress, Progress Bar, Slider
- Calendar, Carousel, Chart

**Outros:**
- Alert, Badge, Avatar, Kbd, Command, Scroll Area, Sidebar
- Sonner (Toasts), Spinner

## 🌈 Personalização de Tema

### Cores Disponíveis
O projeto vem com um sistema de cores bem definido que pode ser customizado no arquivo `index.css`.

### Adicionar Novo Componente
```bash
# Use o Shadcn CLI (se instalado)
npx shadcn-ui@latest add nome-componente

# Ou copie um componente existente e adapte
```

## 📚 Como Usar Componentes

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exemplo</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Clique em mim</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎯 Como Criar um Novo Projeto

Este projeto é um boilerplate. Para criar um novo projeto baseado nele:

1. **Clone como template**
   ```bash
   git clone --depth 1 <seu-repo> meu-novo-projeto
   cd meu-novo-projeto
   rm -rf .git
   git init
   ```

2. **Customize para seu projeto**
   - Atualize `package.json`
   - Personalize cores em `index.css`
   - Adapte componentes conforme necessário

3. **Comece a desenvolver**
   - Crie novas pages em `src/pages/`
   - Reutilize componentes UI
   - Adicione sua lógica de negócio

## 🔧 Configuração Avançada

### TypeScript
- `tsconfig.json` - Configuração base
- `tsconfig.app.json` - Configuração da aplicação
- `tsconfig.node.json` - Configuração do Node

### Build
- `vite.config.ts` - Configuração do Vite
- `components.json` - Configuração do Shadcn/UI

### Lint
- `eslint.config.js` - Configuração do ESLint

## 📦 Instalação Alternativa

Se quiser começar do zero com o mesmo setup:

```bash
npm create vite@latest meu-projeto -- --template react-ts
npm install
# ... e depois instale as dependências manualmente
```

## 💰 Apoiar o Projeto

Se você gosta do RuthesApp e quer apoiar o desenvolvimento, pode fazer uma **doação via PIX**:

### 💳 PIX por QR Code
Escaneie o código QR disponível no modal de doações da aplicação.

### 💬 PIX por Email
```
jefter@ruthes.dev
```

**Toda e qualquer contribuição financeira é bem-vinda e ajuda a manter o projeto ativo!**

## 📄 Licença

Este projeto está disponível para uso livre em múltiplos projetos.

## � Sobre

**RuthesApp** é um boilerplate moderno desenvolvido para servir como base sólida e profissional para novos projetos React. Inclui:

- ✅ Setup completo com todas as dependências necessárias
- ✅ 40+ componentes UI reutilizáveis e customizáveis
- ✅ Sistema de tema dark/light integrado
- ✅ Documentação técnica abrangente
- ✅ Roadmap transparente com 8 funcionalidades planejadas
- ✅ Pronto para produção

**Razão Social**: RUTHES NETWORK LTDA - ME  
**Nome Fantasia**: RUTHES NETWORK  
**CNPJ**: 41.892.334/0001-02  
**Demo ao Vivo**: [ruthesappmain.ruthes.dev](https://ruthesappmain.ruthes.dev)

## �🔗 Links e Recursos

### Demo & Repositório
- **Demo ao Vivo**: [ruthesappmain.ruthes.dev](https://ruthesappmain.ruthes.dev)
- **Repositório GitHub**: [github.com/ruthesdev/RuthesAppMain](https://github.com/ruthesdev/RuthesAppMain)
- **Fork este Projeto**: [github.com/ruthesdev/RuthesAppMain/fork](https://github.com/ruthesdev/RuthesAppMain/fork)

### Documentação Técnica
- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI Docs](https://www.radix-ui.com)
- [Shadcn/UI Docs](https://ui.shadcn.com)

### Developer
- **Desenvolvedor**: [RuthesDev](https://ruthes.dev)
- **Email**: [jefter@ruthes.dev](mailto:jefter@ruthes.dev)
- **Website**: [https://ruthes.dev](https://ruthes.dev)

---

**Desenvolvido como uma base sólida para acelerar o desenvolvimento de aplicações React modernas.**

Última atualização: 17 de outubro de 2025
