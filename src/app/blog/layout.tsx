import { type Metadata } from 'next'
import { getBlogHomePageData } from './function'
import { siteDescription } from '~/constant'

export const generateMetadata = async (): Promise<Metadata> => {
	const data = await getBlogHomePageData()

	if (!data) {
		throw new Error('')
	}

	const { publication } = data

	return {
		title: publication.title || publication.descriptionSEO,
		description: siteDescription,
		applicationName: 'Sarthakjdev',
		authors: [{ name: 'Sarthak Jain', url: 'https://sarthakjdev.com/' }],
		generator: 'Next.js',
		referrer: 'origin-when-cross-origin',
		keywords: [
			'innovation',
			'product development',
			'collaboration',
			'business growth',
			'project success',
			'custom solutions'
		],

		publisher: 'Sarthakjdev',
		robots: 'index, follow',
		creator: 'Sarthak Jain',
		manifest: 'https://sarthakjdev.com/manifest.json',
		openGraph: {
			type: 'website',
			url: 'https://sarthakjdev.com',
			title: publication.title || publication.descriptionSEO || 'Sarthakjdev',
			description: publication.descriptionSEO || publication.title || siteDescription,
			images: [{ url: 'https://sarthakjdev.com/open-graph.png' }],
			siteName: 'Sarthakjdev'
		},
		twitter: {
			card: 'summary_large_image',
			site: '@sarthakjdev',
			description: publication.descriptionSEO || publication.title || siteDescription,
			title: publication.title || publication.descriptionSEO || 'Sarthakjdev',

			creator: '@sarthakjdev',
			images: 'https://sarthakjdev.com/twitter-og.png'
		},
		formatDetection: { telephone: false },
		appleWebApp: true,
		assets: 'https://sarthakjdev.com/assets',
		category: 'Innovation, Product Development, Business Solutions',
		classification: 'Innovative Development Agency',
		other: {
			'X-UA-Compatible': 'IE=edge,chrome=1',
			'mobile-web-app-capable': 'yes'
		},
		metadataBase: new URL('https://sarthakjdev.com'),
		icons: [
			{ rel: 'icon', url: 'https://sarthakjdev.com/favicon.ico' },
			{ rel: 'apple-touch-icon', url: 'https://sarthakjdev.com/apple-icon.png' }
		]
	}
}

const BlogLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <>{children}</>
}

export default BlogLayout
