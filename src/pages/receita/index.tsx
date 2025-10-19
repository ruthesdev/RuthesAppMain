import { DashboardLayout } from '@/layouts/dashboard-layout'
import { appConfig } from '@/config/app.config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileTranscriber } from '@/components/file-transcriber'
import { FileText, Sparkles } from 'lucide-react'

export function Receita() {
  return (
    <DashboardLayout userName={appConfig.app.defaultUserName} pageTitle="Transcrição de Arquivos">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Transcrição de Arquivos</h1>
          </div>
          <p className="text-muted-foreground">
            Submeta arquivos PDF ou imagens para transcrição automática com IA
          </p>
        </div>

        {/* Info Card */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5" />
              Como Funciona
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ✓ Envie um arquivo PDF ou imagem (JPG, PNG, WEBP, HEIC, HEIF)
            </p>
            <p className="text-sm text-muted-foreground">
              ✓ A inteligência artificial irá transcrever todo o conteúdo
            </p>
            <p className="text-sm text-muted-foreground">
              ✓ Baixe o resultado em formato Markdown
            </p>
          </CardContent>
        </Card>

        {/* Transcrever Section */}
        <div className="lg:max-w-4xl">
          <FileTranscriber />
        </div>
      </div>
    </DashboardLayout>
  )
}
