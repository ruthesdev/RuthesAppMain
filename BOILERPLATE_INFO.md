# RuthesApp Boilerplate - Informações Importantes

## 📋 Descrição Geral

**RuthesApp** é um boilerplate/template moderno e completo para iniciar projetos React. Este projeto serve como **ponto de partida para múltiplos outros projetos**, permitindo que você clone, customize e desenvolva de forma rápida e eficiente.

## 🎯 Propósito

Este projeto foi projetado para:
- ✅ **Acelerar o desenvolvimento** - Comece novos projetos em minutos, não em dias
- ✅ **Padronizar estrutura** - Mantenha consistência entre múltiplos projetos
- ✅ **Reutilizar componentes** - Mais de 30 componentes UI prontos para usar
- ✅ **Boas práticas** - TypeScript, ESLint e Tailwind CSS pré-configurados
- ✅ **Escalabilidade** - Estrutura modular e bem organizada

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # 30+ componentes Shadcn/UI reutilizáveis
│   ├── mode-toggle.tsx  # Toggle tema escuro/claro
│   └── theme-provider.tsx # Provider de tema
├── pages/
│   └── Home.tsx         # Página inicial com showcase do boilerplate
├── hooks/
│   └── use-mobile.ts    # Hook para detectar dispositivos móveis
├── lib/
│   └── utils.ts         # Funções utilitárias
├── assets/              # Imagens, ícones, etc
├── App.tsx              # Componente raiz
└── main.tsx             # Entrada da aplicação
```

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| **React** | 19.1.1 | Framework UI |
| **TypeScript** | - | Type safety |
| **Vite** | - | Build tool e dev server |
| **Tailwind CSS** | 4.1.14 | Estilização utilitária |
| **Radix UI** | Múltiplas | Componentes acessíveis |
| **Lucide React** | 0.546.0 | Ícones SVG |
| **Next-themes** | 0.4.6 | Gerenciamento de tema |
| **React Hook Form** | - | Gestão de formulários |
| **ESLint** | - | Linting de código |

## 📦 Componentes Disponíveis

O projeto inclui os seguintes componentes UI pré-construídos (em `src/components/ui/`):

- Accordion
- Alert Dialog
- Alert
- Aspect Ratio
- Avatar
- Badge
- Breadcrumb
- Button
- Button Group
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Drawer
- Dropdown Menu
- Empty State
- Field
- Form
- Hover Card
- Input
- Input Group
- Input OTP
- Item
- Kbd
- Label
- Menubar
- Navigation Menu
- Pagination
- Popover
- Progress
- Radio Group
- Resizable
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Spinner
- Switch
- Table
- Tabs
- Textarea
- Toggle
- Toggle Group
- Tooltip
- Sonner (Toasts)

## 🎨 Tema e Personalização

O projeto suporta **tema escuro/claro automático** com:
- Botão toggle para alternar temas
- Persistência de preferência do usuário
- Variáveis CSS para fácil customização
- Compatibilidade total com Tailwind CSS

## 🚀 Como Começar

### 1. Clone o Repositório
```bash
git clone <seu-repositorio>
cd RuthesAppMain
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
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run lint     # Executa ESLint
npm run preview  # Preview do build
```

## 🔧 Configuração

### TypeScript
- `tsconfig.json` - Configuração base
- `tsconfig.app.json` - Configuração específica da aplicação
- `tsconfig.node.json` - Configuração para arquivos Node

### Build
- `vite.config.ts` - Configuração do Vite
- `components.json` - Configuração do Shadcn/UI

### Lint
- `eslint.config.js` - Configuração do ESLint

## 💡 Workflow de Desenvolvimento

### Para criar um novo projeto baseado no RuthesApp:

1. **Clone este repositório**
   ```bash
   git clone <RuthesApp-repo> <seu-novo-projeto>
   cd <seu-novo-projeto>
   ```

2. **Remova o histórico git** (opcional)
   ```bash
   rm -rf .git
   git init
   ```

3. **Atualize o package.json**
   - Mude `name` para o nome do seu projeto
   - Atualize `version` e outras metadatas

4. **Customize componentes**
   - Adapte cores, fontes e layout conforme necessário
   - Modifique componentes em `src/components/`

5. **Comece a desenvolver**
   - Crie novas pages em `src/pages/`
   - Reutilize componentes UI existentes
   - Adicione novas funcionalidades

## 📚 Melhores Práticas

- ✅ Use componentes UI existentes sempre que possível
- ✅ Mantenha a estrutura de pastas organizada
- ✅ Utilize TypeScript para máxima segurança de tipos
- ✅ Siga as convenções de naming do projeto
- ✅ Execute `npm run lint` antes de commits
- ✅ Documente componentes customizados

## 🔗 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Shadcn/UI](https://ui.shadcn.com)

## 📄 Licença

Este projeto está disponível para uso em múltiplos projetos de desenvolvimento.

---

**Desenvolvido como ponto de partida para acelerar o desenvolvimento de aplicações React modernas.**

Última atualização: 17 de outubro de 2025
