const ANALYTICS_BASE_URL = 'https://hn-ping2.hashnode.com'
const ADVANCED_ANALYTICS_BASE_URL = 'https://stats.hashnode.com'
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn.hashnode.com'
			}
		]
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	},
	rewrites() {
		return [
			{
				source: '/blog',
				destination: 'https://blog-sarthakjdev-com.vercel.app/'
			},
			{
				source: '/blog/:path*',
				destination: 'https://blog-sarthakjdev-com.vercel.app/:path*'
			},
			{
				source: '/ping/data-event',
				destination: `${ANALYTICS_BASE_URL}/api/data-event`
			},
			{
				source: '/ping/view',
				destination: `${ANALYTICS_BASE_URL}/api/view`
			},
			{
				source: '/api/collect',
				destination: `${ADVANCED_ANALYTICS_BASE_URL}/api/collect`
			}
		]
	}
}

module.exports = nextConfig
