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
	},
	 rewrites() {
		return [
		  {
			source: "/blog",
			destination: "https://blog-sarthakjdev-com.vercel.app/", 
		  },
		  {
			source: "/blog/:path*",
			destination: "https://blog-sarthakjdev-com.vercel.app/:path*"
		  },
		];
	  },
}

module.exports = nextConfig
