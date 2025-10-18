import { useState } from "react"
import { Button } from "@/components/ui/button"
import { appConfig } from "@/config/app.config"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Heart, Mail, Copy, Check } from "lucide-react"

export function DonationDialog() {
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)
  const pixEmail = appConfig.donation.email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(pixEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Heart className="h-4 w-4" />
          Apoiar Projeto
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Apoie o {appConfig.app.name}
          </DialogTitle>
          <DialogDescription>
            Se você gosta do {appConfig.app.name} e quer apoiar o desenvolvimento, você pode fazer uma doação via PIX!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* QR Code */}
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold text-foreground mb-3">QR Code PIX</p>
            <img
              src="/images/pix-qrcode.jpeg"
              alt="QR Code PIX"
              className="w-48 h-48 rounded-lg border border-border"
            />
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Ou</span>
            </div>
          </div>

          {/* Email PIX */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">PIX por Email</p>
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <code className="text-sm font-mono text-foreground flex-1 break-all">
                {pixEmail}
              </code>
              <button
                onClick={handleCopyEmail}
                className="flex-shrink-0 hover:bg-background rounded p-1 transition-colors"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                )}
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              Clique para copiar o email e usar no seu aplicativo de PIX
            </p>
          </div>

          {/* Company Info */}
          <div className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-3 space-y-1">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Razão Social</p>
            <p className="text-sm text-foreground">RUTHES NETWORK LTDA - ME</p>
            
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide pt-2">Nome Fantasia</p>
            <p className="text-sm text-foreground">RUTHES NETWORK</p>
            
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide pt-2">CNPJ</p>
            <p className="text-sm font-mono text-foreground">41.892.334/0001-02</p>
          </div>

          {/* Info */}
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              ℹ️ Toda e qualquer contribuição financeira é bem-vinda e ajuda a manter o projeto ativo!
            </p>
          </div>

          {/* Close Button */}
          <Button
            onClick={() => setOpen(false)}
            variant="outline"
            className="w-full"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
