/**
 * Configuração centralizada da aplicação
 * Importa variáveis do arquivo .env
 */

export const appConfig = {
  // Informações da Aplicação
  app: {
    name: import.meta.env.VITE_APP_NAME || "RuthesApp",
    version: import.meta.env.VITE_APP_VERSION || "1.3.0",
    description:
      import.meta.env.VITE_APP_DESCRIPTION ||
      "Boilerplate React moderno com 40+ componentes UI",
    defaultUserName: import.meta.env.VITE_DEFAULT_USER_NAME || "Jefter Ruthes",
  },

  // Informações do Autor/Desenvolvedor
  author: {
    name: import.meta.env.VITE_AUTHOR_NAME || "RuthesDev",
    email: import.meta.env.VITE_AUTHOR_EMAIL || "jefter@ruthes.dev",
    url: import.meta.env.VITE_AUTHOR_URL || "https://ruthes.dev",
    github: import.meta.env.VITE_AUTHOR_GITHUB || "https://github.com/ruthesdev",
  },

  // URLs do Projeto
  urls: {
    github: import.meta.env.VITE_GITHUB_REPO || "https://github.com/ruthesdev/RuthesAppMain",
    demo: import.meta.env.VITE_DEMO_URL || "https://ruthesappmain.ruthes.dev",
    fork: import.meta.env.VITE_FORK_URL || "https://github.com/ruthesdev/RuthesAppMain/fork",
  },

  // Informações da Empresa
  company: {
    name: import.meta.env.VITE_COMPANY_NAME || "RUTHES NETWORK",
    cnpj: import.meta.env.VITE_COMPANY_CNPJ || "41.892.334/0001-02",
    url: import.meta.env.VITE_COMPANY_URL || "https://ruthes.network",
  },

  // Configurações de Donação
  donation: {
    email: import.meta.env.VITE_DONATION_EMAIL || "jefter@ruthes.dev",
  },

  // Ambiente
  env: import.meta.env.VITE_ENV || "development",
  isDev: import.meta.env.VITE_ENV === "development",
  isProd: import.meta.env.VITE_ENV === "production",
}

export default appConfig
