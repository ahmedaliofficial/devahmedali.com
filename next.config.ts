import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
