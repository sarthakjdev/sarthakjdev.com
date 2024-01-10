import { type BlogPostType } from './types'
import {
	DEFAULT_LIGHT_POST_COVER,
	IS_DEVELOPMENT,
	IS_STAGING,
	hashnodeEnv,
	isBrowser,
	protocol
} from './constant'
import type { Post, Publication, PublicationFragment, User } from 'root/generated/graphql'

export const getBlogs = async (count: number) => {
	const query = {
		query: `query { publication(host: "sarthakjdev.hashnode.dev"){  posts(first: ${count}){edges{node {
	id       
	title      
	slug   
	url    
	canonicalUrl    
	coverImage {         
		url        
	}       
	subtitle        
	brief     
	readTimeInMinutes 
	publishedAt      
	author {        
		id           
		username     
		name       
		profilePicture      
	}   
}}}}}`
	}

	const blogs = await fetch('https://gql.hashnode.com/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(query),
		cache: 'force-cache'
	}).then(res => res.json())

	return blogs.data.publication.posts.edges.map((item: any) => {
		const post = item.node

		return {
			id: post.id,
			title: post.title,
			slug: post.slug,
			url: post.url,
			canonicalUrl: post.canonicalUrl,
			coverImageUrl: post.coverImage.url,
			subtitle: post.subtitle,
			brief: post.brief,
			readTimeInMinutes: post.readTimeInMinutes,
			author: {
				name: post.author.name,
				profilePictureUrl: post.author.profilePicture,
				username: post.author.username
			},
			publishedAt: post.publishedAt
		}
	}) as BlogPostType[]
}

export const generateBlogTitleWithoutDisplayTitle = (
	publication: Pick<PublicationFragment, 'title'> & {
		author: Pick<User, 'name'>
	}
) => `${publication.title || `${publication.author?.name}'s Blog`}`

export const lightOrDark = (color: any) => {
	// Variables for red, green, blue values
	let r, g, b, hsp

	// Check the format of the color, HEX or RGB?
	if (color.match(/^rgb/)) {
		// If HEX --> store the red, green, blue values in separate variables
		color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)

		r = color[1]
		g = color[2]
		b = color[3]
	} else {
		// If RGB --> Convert it to HEX: http://gist.github.com/983661
		color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'))

		r = color >> 16
		g = (color >> 8) & 255
		b = color & 255
	}

	// HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
	hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

	// Using the HSP value, determine whether the color is light or dark
	if (hsp > 127.5) {
		return 'light'
	} else {
		return 'dark'
	}
}

/**
 * Solution for bug in some browsers (e.g. Safari) where user is scroll
 * jumped to bottom of page when closing radix modal with esc
 */
export const blurActiveFocus = () => {
	if (document.activeElement && document.activeElement instanceof HTMLElement) {
		document.activeElement.blur()
	}
}

/**
 * Maintain focus position e.g. using a constant open radix dialog which won't automatically
 * restore correct focus position
 */
// export const returnFocusToElement = (elRef: RefObject<HTMLElement>) => {
// 	if (elRef && elRef.current) elRef.current.focus()
// }

export const getHashId = () => {
	if (!isBrowser) return null
	const hashId = window.location.hash?.substring(1)
	if (hashId.length > 0) {
		return hashId.split('?')[0]
	}
	return null
}

export const getDefaultPostCoverImageUrl = () => {
	return DEFAULT_LIGHT_POST_COVER
}

export const doesPublicationHaveSocialLinks = (pubLinks: object) =>
	Object.entries(pubLinks || {})
		.filter(entry => entry[0] !== '__typename')
		.map(link => {
			const key = link[0]
			const value = link[1]

			return { key, value }
		})
		.some(entry => entry.value)

const isValidPublicationDomainNamesKey = (
	key: unknown
): key is keyof typeof publicationDomainNames => (key as any) in publicationDomainNames

export const publicationDomainNames = {
	development: 'app.localhost',
	staging: 'hashnode.net',
	test: 'hashnode.net',
	production: 'hashnode.dev'
} as const

export const getAppUrl = () => {
	let url

	switch (hashnodeEnv) {
		case 'development':
			url = 'http://localhost:8080'
			break
		case 'test':
		case 'staging':
			url = 'https://hashnode.xyz'
			break
		case 'production':
		default:
			url = 'https://hashnode.com'
			break
	}
	return url
}

/**
 * Creates the origin address for a publication.
 *
 * @example
 * createPublicationHostName({ username: 'myusername' })
 * // returns 'https://myusername.hashnode.dev'
 */
export const createPublicationOrigin = (
	publication: any // TODO: Need to think what we need to do about legacyPublication
) => {
	const domain = publication.domainInfo.domain?.host ?? ''
	const username = publication.domainInfo.hashnodeSubdomain ?? ''
	const domainStatus = {
		ready: publication.domainInfo.domain?.ready ?? undefined,
		certIssued: publication.domainInfo?.domain?.ready ?? undefined
	}
	if (!publication || (!domain && !username)) {
		// using the hashnode domain as a fallback in order to prevent errors
		return getAppUrl()
	}

	const hasReadyDomain = !!domain && !!domainStatus?.ready

	// always use prod as default to make sure prod works
	let subDomain = hasReadyDomain ? '' : `${username}.`
	if (IS_DEVELOPMENT || IS_STAGING) {
		subDomain = `${username}.`
	}

	let domainName = hasReadyDomain ? domain : publicationDomainNames.production
	if ((IS_DEVELOPMENT || IS_STAGING) && isValidPublicationDomainNamesKey(hashnodeEnv)) {
		domainName = publicationDomainNames[hashnodeEnv]
	}
	return `${protocol}${subDomain}${domainName}`
}

export const createPostUrl = (
	{ slug, cuid, partOfPublication }: any, // TODO: legacyPublication type needs to be fixed
	publication?: any
) => {
	// for legacy purposes as it is not possible to create a post without a publication since 2022-08
	if (!partOfPublication || !publication) {
		// we always use absolute URLs since we are on users' domains
		return `${getAppUrl()}/post/${slug}-${cuid}`
	}

	const origin = createPublicationOrigin(publication)
	const isSimpleUrl = publication.urlPattern === 'SIMPLE'
	const pathname = isSimpleUrl ? `/${slug}` : `/${slug}-${cuid}`
	return `${origin}${pathname}`
}

export const createDraftPreviewUrl = (id: string) => `${getAppUrl()}/preview/${id}`

export function getPostUrl(slug: string) {
	return `/blog/${slug}`
}

export function getAbsolutePostUrl(slug: string) {
	return `https://softlancer.co/blog/${slug}`
}

export const addArticleJsonLd = (publication: any, post: any) => {
	const tags = (post.tags ?? []).map((tag: any) => tag.name)
	const schema = {
		'@context': 'https://schema.org/',
		'@type': 'Blog',
		'@id': publication.url,
		mainEntityOfPage: publication.url,
		name: publication.title,
		description: publication.about?.markdown,
		publisher: {
			'@type': publication.isTeam ? 'Organization' : 'Person',
			'@id': publication.url,
			name: publication.title,
			image: {
				'@type': 'ImageObject',
				url: publication.preferences?.logo || publication.preferences?.darkMode?.logo
			}
		},
		blogPost: [
			{
				'@type': 'BlogPosting',
				'@id': post.url,
				mainEntityOfPage: post.url,
				headline: post.title,
				name: post.title,
				description: post.seo?.description || post.brief,
				datePublished: post.publishedAt,
				dateModified: post.updatedAt,
				author: {
					'@type': 'Person',
					'@id': `https://hashnode.com/@${post.author?.username}`,
					name: post.author?.name,
					url: `https://hashnode.com/@${post.author?.username}`
				},
				image: {
					'@type': 'ImageObject',
					url: post.coverImage?.url
				},
				url: post.url,
				keywords: tags
			}
		]
	}
	return schema
}

export const addPublicationJsonLd = (publication: any) => {
	const schema = {
		'@context': 'https://schema.org/',
		'@type': 'Blog',
		'@id': publication.url,
		mainEntityOfPage: publication.url,
		name: publication.title,
		description: publication.descriptionSEO,
		publisher: {
			'@type': publication.isTeam ? 'Organization' : 'Person',
			'@id': publication.url,
			name: publication.title,
			image: {
				'@type': 'ImageObject',
				url: publication.preferences?.logo
			}
		}
	}
	return schema
}

import { Base64 } from 'js-base64'

const stripEmojis = (str: string) =>
	str
		.replace(
			/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
			''
		)
		.replace(/\s+/g, ' ')
		.trim()

export const getAutogeneratedPostOG = (post: Post, publication: Publication) => {
	const { author } = publication
	const { title, readTimeInMinutes, reactionCount = 0, responseCount = 0 } = post

	const ogUrl = `${publication.url}/api/og/post`
	const ogData: any = {}

	try {
		ogData.title = encodeURIComponent(stripEmojis(title))
		ogData.author = encodeURIComponent(author.name)
		ogData.domain = new URL(publication.url).hostname

		if (author.profilePicture) {
			ogData.photo = author.profilePicture
		}

		if (readTimeInMinutes) {
			ogData.readTime = readTimeInMinutes
		}

		if (reactionCount > 0) {
			ogData.reactions = reactionCount
		}

		if (responseCount > 0) {
			ogData.comments = responseCount
		}
	} catch (e) {
		console.log(e)
	}
	return `${ogUrl}?og=${Base64.encode(JSON.stringify(ogData))}`
}

export const getAutogeneratedPublicationOG = (publication: Publication) => {
	const {
		title,
		isTeam,
		favicon,
		author,
		followersCount,
		descriptionSEO: descriptionSeo
	} = publication
	const totalDocuments = publication.posts.totalDocuments
	const logo = publication.preferences.logo

	const ogUrl = `${publication.url}/api/og/home`
	const ogData: Record<string, any> = {}

	try {
		ogData.title = title
			? encodeURIComponent(stripEmojis(title))
			: `${author.name}'s ${isTeam ? 'team' : ''} blog`
		ogData.domain = new URL(publication.url).hostname
		ogData.followers = isTeam ? followersCount : author.followersCount

		if (author.profilePicture && !isTeam) {
			ogData.photo = author.profilePicture
		}

		if (logo) {
			ogData.logo = logo
		}

		if (isTeam) {
			ogData.isTeam = isTeam
		}

		if (descriptionSeo) {
			ogData.meta = encodeURIComponent(stripEmojis(descriptionSeo)) // Vercel OG is not able to work with all kinds of emojis
		}

		if (favicon) {
			ogData.favicon = favicon
		}

		if (totalDocuments && totalDocuments > 0) {
			ogData.articles = totalDocuments
		}
	} catch (e) {
		console.log(e)
	}
	return `${ogUrl}?og=${Base64.encode(JSON.stringify(ogData))}`
}

export function getReadTime(content: string) {
	const wordsPerMinute = 225 // Average case.
	const numberOfWords =
		content
			.trim()
			.replace(/(\r\n|\n|\r)/gm, ' ')
			.split(' ')
			.filter(word => word !== '').length || 0
	if (numberOfWords > 0) {
		return Math.ceil(numberOfWords / wordsPerMinute)
	}
	return 0
}
