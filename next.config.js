/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'images.unsplash.com'
		} ,  {protocol: 'https' , hostname: 'cdn.hashnode.com'}]
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	}
}

module.exports = nextConfig
