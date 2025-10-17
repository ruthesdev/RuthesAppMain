import { ThemeProvider } from '@/components/theme-provider'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import { Login } from './pages/Login'
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
    <ThemeProvider defaultTheme="system" storageKey="ruthesapp-ui-theme">
      {renderPage()}
    </ThemeProvider>
  )
}

export default App
