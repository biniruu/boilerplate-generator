import getCertainConditions from '@utils/certainConditions'
import convertToString from '@utils/convertToString'
import type { SelectOptions } from '_types'

interface Config {
  compiler: {
    styledComponents: boolean
  }
  distDir: string
  images: {
    remotePatterns: {
      protocol: string
      hostname: string
    }[]
  }
  reactStrictMode: boolean
  rewrites?: () => Promise<
    {
      source: string
      destination: string
    }[]
  >
  trailingSlash?: boolean
  typescript?: {
    tsconfigPath: string
  }
}

/** @type {import('next').NextConfig} */

/**
 * @property {Object[]} images.remotePatterns - external image paths
 *
 * @property {Function} rewrites - to resolve a CORS issue
 * @property {string} source - internal path
 * @property {string} destination - external path you need to connect
 */
const generateNextConfig = (configOptions: SelectOptions) => {
  const { hasTypescript } = getCertainConditions(configOptions)

  const config: Config = {
    compiler: {
      styledComponents: true,
    },
    distDir: '.next',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
      ],
    },
    reactStrictMode: true,
    // async rewrites() {
    //   return [
    //     {
    //       source: '',
    //       destination: `${process.env.NEXT_PUBLIC_DEV_BASE_URL}/:path*/`,
    //     },
    //   ]
    // },
    // trailingSlash: true,
  }

  if (hasTypescript) {
    /**
     * @example
     *
     * ```js
     * typescript: {
     *   tsconfigPath: isProduction ? 'tsconfig.build.json' : 'tsconfig.json',
     * },
     * ```
     */
    config.typescript = {
      tsconfigPath: 'replace tsconfigPath',
    }
  }

  const code = `const isProduction = process.env.NODE_ENV === 'production'
  
const nextConfig = ${convertToString(config)}

module.exports = nextConfig`
  const result = code.replace(`'replace tsconfigPath'`, `isProduction ? 'tsconfig.build.json' : 'tsconfig.json'`)

  return result
}

export default generateNextConfig
