/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Custom webpack config to handle spaces in paths
    config.watchOptions = {
      followSymlinks: true,
    }
    return config
  },
}

module.exports = nextConfig 