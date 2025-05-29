import { type MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Sarthakjdev',
		short_name: 'sarthakjdev',
		description: 'Entrepreneur building AI-native systems that talk and think like humans.',
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
