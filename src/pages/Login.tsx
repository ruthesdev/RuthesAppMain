import { LoginForm } from "@/components/login-form"

export function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="w-full max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
