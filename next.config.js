/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Silence optional-dependency warnings from @metamask/sdk and WalletConnect.
    // These packages probe for 'encoding' and 'pino-pretty' at compile time but
    // do not require them. Mapping them to false returns an empty module.
    config.resolve.alias = {
      ...config.resolve.alias,
      encoding: false,
      'pino-pretty': false,
    }
    return config
  },
}

module.exports = nextConfig