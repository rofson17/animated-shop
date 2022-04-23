/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SMPT_EMAIL: "",
    SMTP_EMALI_PASSWORD: "",
    ADMIN_EMAIL: ''
  }
}

module.exports = nextConfig
