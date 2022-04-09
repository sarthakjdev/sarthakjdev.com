/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    email: process.env.EMAIL,
    email_password: process.env.EMAIL_PASSWORD,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID ,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID ,
    TWITTER_API_KEY: process.env.TWITTER_API_KEY,
    TWITTER_API_KEY_SECRET: process.env.TWITTER_API_KEY_SECRET,
    TWITTER_API_BEARER_TOKEN: process.env.TWITTER_API_BEARER_TOKEN,
    TWITTER_BASE_URL: process.env.TWITTER_BASE_URL,
    TWITTER_USER_ID: process.env.TWITTER_USER_ID,
  }
}

module.exports = nextConfig
