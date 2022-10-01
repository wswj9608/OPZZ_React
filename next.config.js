/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode가 true 일 때 렌더링 두번씩 발생함 왜?
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig
