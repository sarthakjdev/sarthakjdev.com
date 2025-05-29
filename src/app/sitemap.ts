import { type MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://sarthakjdev.com',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: 'https://sarthakjdev.com/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: 'https://sarthakjdev.com/writings',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: 'https://sarthakjdev.com/now',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
	]
}
