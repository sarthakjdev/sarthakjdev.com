import { request } from 'graphql-request'
import {
	SlugPostsByPublicationDocument,
	type SlugPostsByPublicationQuery,
	type SlugPostsByPublicationQueryVariables
} from 'root/generated/graphql'
import BlogPostClientPage from './client-page'
import { type Metadata } from 'next'
import { getBlogPostData } from './function'

export const revalidate = 60 * 60 * 24 * 30

export const generateMetadata = async (props: { params: { slug: string } }): Promise<Metadata> => {
	const { params } = props
	const { post, publication } = await getBlogPostData(params.slug)
	return {
		title: post?.title || post?.subtitle || publication.title,
		description: post?.seo?.description || post?.subtitle,
		applicationName: 'Sarthakjdev',
		authors: [{ name: post?.author.name, url: 'https://sarthakjdev.com/about' }],
		generator: 'Next.js',
		referrer: 'origin-when-cross-origin',
		keywords: ['Sarthakjdev', ...(post?.tags || []).map(tag => tag.name)],
		publisher: 'Sarthakjdev',
		robots: 'index, follow',
		creator: 'Sarthakjdev',
		manifest: 'https://sarthakjdev.com/manifest.json',
		openGraph: {
			type: 'website',
			url: post?.url,
			title: post?.title,
			description: post?.seo?.description || post?.subtitle || publication.title,
			images: [
				{
					url: post?.ogMetaData?.image || 'https://sarthakjdev.com/open-graph.png'
				}
			],
			siteName: 'sarthakjdev'
		},
		twitter: {
			card: 'summary_large_image',
			site: '@Sarthakjdevhq',
			description: post?.seo?.description || post?.subtitle || undefined,
			title: post?.title || post?.subtitle || publication.title,
			creator: '@Sarthakjdevhq',
			images: post?.ogMetaData?.image || 'https://sarthakjdev.com/twitter-og.png'
		},
		category: 'Engineering Backend Development Software Development',
		classification:
			(post?.tags || []).map(tag => tag.name).join(', ') ||
			'Backend DevOps Software Engineer',
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

export async function generateStaticParams() {
	if (
		!process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT ||
		!process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST
	) {
		throw new Error(
			'process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT or process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST is not defined'
		)
	}

	const data = await request<SlugPostsByPublicationQuery, SlugPostsByPublicationQueryVariables>(
		process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
		SlugPostsByPublicationDocument,
		{
			first: 10,
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST
		}
	)

	const postSlugs = (data.publication?.posts.edges ?? []).map(edge => edge.node.slug)

	return postSlugs.map(slug => ({
		slug: slug
	}))
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
	const { morePosts, post, publication } = await getBlogPostData(params.slug)

	return <BlogPostClientPage morePosts={morePosts} post={post} publication={publication} />
}

export default BlogPost
