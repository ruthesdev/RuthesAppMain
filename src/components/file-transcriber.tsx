import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, FileUp, Download, AlertCircle } from 'lucide-react'

interface FileTranscriberProps {
  apiKey?: string
}

export function FileTranscriber({ apiKey = import.meta.env.VITE_GEMINI_API_KEY }: FileTranscriberProps) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError('')
      setResult('')
    }
  }

  const handleTranscribe = async () => {
    if (!file) {
      setError('Por favor, selecione um arquivo')
      return
    }

    if (!apiKey) {
      setError('Chave API do Gemini não configurada')
      return
    }

    setLoading(true)
    setError('')

    try {
      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

      // Converter arquivo para base64 (método seguro para arquivos grandes)
      const bytes = await file.arrayBuffer()
      const byteArray = new Uint8Array(bytes)
      let base64 = ''
      for (let i = 0; i < byteArray.length; i++) {
        base64 += String.fromCharCode(byteArray[i])
      }
      base64 = btoa(base64)

      // Determinar MIME type
      let mimeType = 'image/jpeg'
      if (file.type === 'application/pdf') {
        mimeType = 'application/pdf'
      } else if (file.type.startsWith('image/')) {
        mimeType = file.type
      }

      // Chamar API Gemini
      const response = await model.generateContent([
        {
          inlineData: {
            data: base64,
            mimeType,
          },
        },
        'Transcreva TODO o conteúdo deste arquivo em texto formatado em markdown. Preserve a estrutura, formatação, títulos, listas e qualquer outra informação importante.',
      ])

      setResult(response.response.text())
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido'
      setError(`Erro na transcrição: ${errorMessage}`)
      setResult('')
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadMarkdown = () => {
    if (!result) return

    const element = document.createElement('a')
    element.setAttribute('href', `data:text/markdown;charset=utf-8,${encodeURIComponent(result)}`)
    element.setAttribute('download', `transcricao_${Date.now()}.md`)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleReset = () => {
    setFile(null)
    setResult('')
    setError('')
  }

  return (
    <div className="space-y-6">
      {/* Card de Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileUp className="h-5 w-5" />
            Selecionar Arquivo
          </CardTitle>
          <CardDescription>
            Escolha um arquivo PDF ou imagem para transcrever
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4">
            <Input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.heif"
              onChange={handleFileChange}
              disabled={loading}
              className="cursor-pointer"
            />

            {file && (
              <div className="p-3 bg-secondary rounded-lg">
                <p className="text-sm font-medium text-foreground">
                  Arquivo selecionado: {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  Tamanho: {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleTranscribe}
              disabled={!file || loading}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Transcrevendo...
                </>
              ) : (
                'Transcrever Arquivo'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Card de Resultado */}
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Resultado da Transcrição</CardTitle>
            <CardDescription>
              Conteúdo transcrito do arquivo em formato Markdown
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={result}
              readOnly
              className="font-mono text-sm min-h-96"
            />

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleDownloadMarkdown}
                variant="default"
                className="flex-1"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download em Markdown
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1"
                size="lg"
              >
                Nova Transcrição
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
