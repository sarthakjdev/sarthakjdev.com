import {
	SeriesListDocument,
	type SeriesListQuery,
	type SeriesListQueryVariables
} from 'root/generated/graphql'
import { request } from 'graphql-request'
import { HASHNODE_GQL_ENDPOINT, HASHNODE_PUBLICATION_HOST, ProductDescription } from '~/constant'
import { notFound } from 'next/navigation'
import { getSeriesBySlug } from './function'
import { type Metadata } from 'next'
import SeriesClientPage from './client-page'

export const revalidate = 60 * 60 * 24 * 30

export const generateMetadata = async (props: { params: { slug: string } }): Promise<Metadata> => {
	const { params } = props
	const { series, publication } = await getSeriesBySlug(params.slug)
	return {
		title: series?.name || series.description?.text || publication.title,
		description: series.description?.text || publication?.descriptionSEO || ProductDescription,
		applicationName: 'Softlancer',
		authors: [{ name: series?.author.name, url: 'https://softlancer.co/about' }],
		generator: 'Next.js',
		referrer: 'origin-when-cross-origin',
		keywords: ['softlancer'],
		publisher: 'Softlancer',
		robots: 'index, follow',
		creator: 'Softlancer Development Team',
		manifest: 'https://softlancer.co/manifest.json',
		openGraph: {
			type: 'website',
			url: `https://softlancer.co/series/${series?.slug}`,
			title: series?.name || series.description?.text || publication.title,
			description:
				series.description?.text || publication?.descriptionSEO || ProductDescription,
			images: [
				{
					url: series?.coverImage || 'https://softlancer.co/open-graph.png'
				}
			],
			siteName: 'Softlancer'
		},
		twitter: {
			card: 'summary_large_image',
			site: '@Softlancerhq',
			description:
				series.description?.text || publication?.descriptionSEO || ProductDescription,
			title: series?.name || series.description?.text || publication.title,
			creator: '@Softlancerhq',
			images: series?.coverImage || 'https://softlancer.co/twitter-og.png'
		},
		category: 'Innovation, Product Development, Business Solutions',
		classification: 'Softlancer - Ideate. Innovate. Elevate',
		other: {
			'X-UA-Compatible': 'IE=edge,chrome=1',
			'mobile-web-app-capable': 'yes'
		},
		metadataBase: new URL('https://softlancer.co'),
		icons: [
			{ rel: 'icon', url: 'https://softlancer.co/favicon.ico' },
			{ rel: 'apple-touch-icon', url: 'https://softlancer.co/apple-icon.png' }
		]
	}
}

export async function generateStaticParams() {
	if (!HASHNODE_GQL_ENDPOINT || !HASHNODE_PUBLICATION_HOST) {
		throw new Error(
			'process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT or process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST is not defined'
		)
	}

	const data = await request<SeriesListQuery, SeriesListQueryVariables>(
		HASHNODE_GQL_ENDPOINT,
		SeriesListDocument,
		{
			host: HASHNODE_PUBLICATION_HOST
		}
	)

	if (!data.publication) {
		console.error('publication not found in SeriesListQuery query ')
		notFound()
	}

	const series = data.publication.seriesList

	return series.edges.map(node => ({ ...node.node }))
}

const Series = async ({ params }: { params: { slug: string } }) => {
	if (!HASHNODE_PUBLICATION_HOST) {
		throw new Error('HASHNODE_PUBLICATION_HOST not found')
	}

	const data = await getSeriesBySlug(params.slug)

	return (
		<SeriesClientPage
			host={HASHNODE_PUBLICATION_HOST}
			initialLimit={6}
			posts={data.posts}
			publication={data.publication}
			series={data.series}
			slug={params.slug}
			seriesList={data.seriesList}
			key={'series-client-component'}
			pageProps={null}
		/>
	)
}

export default Series
