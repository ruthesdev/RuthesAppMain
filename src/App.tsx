import { ThemeProvider } from '@/components/theme-provider'
import { appConfig } from '@/config/app.config'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import { Login } from './pages/Login'
import { Dashboard } from './pages/dashboard'
import { DashboardUsuarios } from './pages/dashboard/usuarios'
import { Receita } from './pages/receita'
import DocumentacaoIndex from './pages/documentacao'
import DocumentacaoVite from './pages/documentacao/vite'
import DocumentacaoReact from './pages/documentacao/react'
import DocumentacaoTypeScript from './pages/documentacao/typescript'
import DocumentacaoTailwind from './pages/documentacao/tailwind'
import DocumentacaoRadix from './pages/documentacao/radix'
import DocumentacaoShadcn from './pages/documentacao/shadcn'
import { useEffect, useState } from 'react'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const renderPage = () => {
    switch (currentPath) {
      case '/login':
        return <Login />
      case '/dashboard':
        return <Dashboard />
      case '/dashboard/usuarios':
        return <DashboardUsuarios />
      case '/receita':
        return <Receita />
      case '/roadmap':
        return <Roadmap />
      case '/documentacao':
        return <DocumentacaoIndex />
      case '/documentacao/vite':
        return <DocumentacaoVite />
      case '/documentacao/react':
        return <DocumentacaoReact />
      case '/documentacao/typescript':
        return <DocumentacaoTypeScript />
      case '/documentacao/tailwind':
        return <DocumentacaoTailwind />
      case '/documentacao/radix':
        return <DocumentacaoRadix />
      case '/documentacao/shadcn':
        return <DocumentacaoShadcn />
      default:
        return <Home />
    }
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey={`${appConfig.app.name.toLowerCase()}-ui-theme`}>
      {renderPage()}
    </ThemeProvider>
  )
}

export default App
