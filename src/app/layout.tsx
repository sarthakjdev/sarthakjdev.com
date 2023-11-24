import './globals.css'
import type { Metadata } from 'next'
import StandardLayout from '~/components/layouts/standard-layout'
import { Inter } from 'next/font/google'
import { clsx } from 'clsx'
import { siteDescription } from '~/constant'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Sarthakjdev',
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
		title: 'Sarthakjdev',
		description: siteDescription,
		images: [{ url: 'https://sarthakjdev.com/open-graph.png' }],
		siteName: 'Sarthakjdev'
	},
	twitter: {
		card: 'summary_large_image',
		site: '@Sarthakjdev',
		description: siteDescription,
		title: 'Sarthakjdev',
		creator: '@Sarthakjdev',
		images: 'https://sarthakjdev.com/twitter-og.png'
	},
	verification: {
		google: 'mrOKVGMry1NOe6Hrn1lXqy0dYcuAqNVbiDr5HeSfRWo'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={clsx(inter.className, "bg-[url('/background.png')] bg-contain bg-fixed")}
			>
				<StandardLayout>{children}</StandardLayout>
			</body>
		</html>
	)
}
