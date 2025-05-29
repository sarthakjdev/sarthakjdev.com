import { type MetadataRoute } from 'next'
import { CANONICAL_SITE_DOMAIN } from '~/constant'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: '/private/'
			},
			{
				userAgent: 'AdsBot-Google',
				allow: '/'
			},
			{
				userAgent: 'GPTBot',
				allow: '/'
			}
		],
		sitemap: `${CANONICAL_SITE_DOMAIN}/sitemap.xml`
	}
}

