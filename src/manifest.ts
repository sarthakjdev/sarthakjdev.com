import { type MetadataRoute } from 'next'
import { siteDescription } from '~/constant'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Sarthakjdev',
		short_name: 'sarthakjdev',
		description: siteDescription,
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#06b6d4',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon'
			}
		]
	}
}
