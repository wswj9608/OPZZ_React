/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode가 true 일 때 렌더링 두번씩 발생함 왜?
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      's3.ap-northeast-2.amazonaws.com',
      'raw.communitydragon.org',
      's-lol-web.op.gg',
      'opgg-static.akamaized.net',
    ],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
