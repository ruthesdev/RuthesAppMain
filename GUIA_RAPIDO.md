# ⚡ Guia Rápido - RuthesApp

## 🎯 O que é RuthesApp?

**RuthesApp** é um boilerplate/template pronto para clonar e usar como base para novos projetos React. Ele já vem com:

✅ Todos os componentes UI que você precisa  
✅ Tema escuro/claro funcionando  
✅ TypeScript configurado  
✅ Tailwind CSS pronto  
✅ Build otimizado com Vite  

## 🚀 Como Usar (3 Passos)

### 1️⃣ Clone o Repositório
```bash
git clone <URL-DO-RUTHESAPP> meu-novo-projeto
cd meu-novo-projeto
```

### 2️⃣ Instale e Comece
```bash
npm install
npm run dev
```

### 3️⃣ Customize
- Mude o `name` em `package.json`
- Adapte cores em `src/index.css`
- Modifique componentes em `src/components/ui/`
- Crie suas pages em `src/pages/`

## 📦 Componentes Mais Usados

### Botão
```tsx
import { Button } from "@/components/ui/button"

<Button>Clique aqui</Button>
<Button variant="outline">Outline</Button>
<Button size="lg">Grande</Button>
```

### Card
```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>
```

### Dialog (Modal)
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

<Dialog>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título do Modal</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Form (Formulário)
```tsx
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const form = useForm()

<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} type="email" />
        </FormControl>
      </FormItem>
    )}
  />
</Form>
```

### Input
```tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Digite algo..." />
```

### Select (Dropdown)
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="opt1">Opção 1</SelectItem>
    <SelectItem value="opt2">Opção 2</SelectItem>
  </SelectContent>
</Select>
```

### Tabs
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs>
  <TabsList>
    <TabsTrigger value="tab1">Aba 1</TabsTrigger>
    <TabsTrigger value="tab2">Aba 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Conteúdo 1</TabsContent>
  <TabsContent value="tab2">Conteúdo 2</TabsContent>
</Tabs>
```

### Alert
```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

<Alert>
  <AlertTitle>Atenção</AlertTitle>
  <AlertDescription>Mensagem importante</AlertDescription>
</Alert>
```

## 🎨 Temas

O projeto vem com tema escuro/claro automático. Para alternar:

```tsx
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return <ModeToggle />
}
```

## 📱 Responsividade com Tailwind

```tsx
<div className="text-sm md:text-base lg:text-lg">
  Texto responsivo
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Cards responsivos
</div>
```

## 🔗 Importações Importantes

```tsx
// Componentes UI
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Ícones
import { ChevronDown, Menu, X } from "lucide-react"

// Hooks
import { useIsMobile } from "@/hooks/use-mobile"

// Utilitários
import { cn } from "@/lib/utils"
```

## 📝 Scripts Úteis

```bash
npm run dev       # Desenvolvimento
npm run build     # Build de produção
npm run lint      # Verificar código
npm run preview   # Preview do build
```

## 🎯 Estrutura de Pastas

Quando criar um novo projeto:

```
meu-novo-projeto/
├── src/
│   ├── components/          # Componentes da aplicação
│   │   ├── ui/              # ← Use estes componentes!
│   │   └── MyComponent.tsx  # Seus componentes
│   ├── pages/               # Páginas
│   ├── hooks/               # Hooks customizados
│   ├── lib/                 # Funções utilitárias
│   ├── App.tsx
│   └── main.tsx
├── public/                  # Arquivos estáticos
├── package.json
└── vite.config.ts
```

## 🚦 Checklist para Novo Projeto

- [ ] Clone o repositório
- [ ] Execute `npm install`
- [ ] Altere `name` em `package.json`
- [ ] Execute `npm run dev`
- [ ] Customize cores em `index.css`
- [ ] Delete `BOILERPLATE_INFO.md` e `MUDANCAS_HOME.md`
- [ ] Comece a desenvolver!

## 💡 Dicas Profissionais

1. **Reutilize componentes** - Use os componentes UI em vez de criar novos
2. **Type everything** - Use TypeScript para evitar bugs
3. **Organize pastas** - Mantenha uma estrutura clara
4. **Commit frequente** - Faça commits pequenos e frequentes
5. **ESLint** - Execute `npm run lint` antes de commits

## 🆘 Resolução de Problemas

### Porta 5173 já está em uso
```bash
npm run dev -- --port 3000
```

### Erros de imports
```bash
npm install
```

### Rebuild necessário
```bash
rm -rf node_modules
npm install
npm run dev
```

## 📚 Recursos Extras

- [Componentes disponíveis](/src/components/ui/)
- [Documentação Tailwind](https://tailwindcss.com)
- [Documentação Shadcn/UI](https://ui.shadcn.com)
- [Ícones disponíveis - Lucide](https://lucide.dev)

---

**Dúvidas?** Consulte o `README.md` ou `BOILERPLATE_INFO.md`

Boa sorte com seu projeto! 🚀
