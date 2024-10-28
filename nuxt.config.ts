type HttpsOptions = {key?: string, cert?: string} | undefined

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  vite: {
    server: {
      hmr: {
        clientPort: hmrClientPort(process.env?.VITE_SERVER_HMR_CLIENTPORT),
        host: hmrHost(process.env?.VITE_SERVER_HMR_HOST),
        protocol: hmrProtocol(process.env?.VITE_SERVER_HMR_PROTOCOL),
      },
    },
  },

  devServer: {
    host: serverHost(process.env?.VITE_SERVER_HOST),
    https: serverHttps(process.env),
    port: serverPort(process.env?.VITE_SERVER_PORT),
  },

  compatibilityDate: '2024-10-27'
})

function hmrClientPort(port?: string): number | undefined {
  return port ? parseInt(port) : undefined
}

function hmrHost(host?: string): string {
  return host ?? 'localhost'
}

function hmrProtocol(protocol?: string): string | undefined {
  return protocol
}

function serverHost(host?: string): string | boolean {
  if (host === 'true') return true

  if (typeof host === 'string') return host

  return 'localhost'
}

function serverHttps(env: NodeJS.ProcessEnv): HttpsOptions {
  const {VITE_CERT, VITE_CERT_KEY, VITE_SERVER_HTTPS} = env

  if (!VITE_CERT || !VITE_CERT_KEY) return undefined

  if (VITE_SERVER_HTTPS !== 'true') return undefined

  return {
    cert: VITE_CERT,
    key: VITE_CERT_KEY,
  }
}

function serverPort(port?: string): number {
  return port ? parseInt(port) : 3000
}
