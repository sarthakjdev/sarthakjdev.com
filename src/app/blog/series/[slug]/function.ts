import { notFound } from 'next/navigation'
import { SeriesPageInitialDocument } from 'root/generated/graphql'
import { HASHNODE_PUBLICATION_HOST } from '~/constant'
import { createHeaders, createSSRExchange, getServerSideUrqlClient } from '~/hashnode-api/client'

export async function getSeriesBySlug(slug: string) {
	if (!HASHNODE_PUBLICATION_HOST) {
		notFound()
	}
	const ssrCache = createSSRExchange()

	const urqlClient = getServerSideUrqlClient(ssrCache)

	let rawCurrentMenuId = ''
	const publicationInfo = await urqlClient
		.query(
			SeriesPageInitialDocument,
			{
				host: HASHNODE_PUBLICATION_HOST,
				slug: slug,
				first: 6,
				after: null
			},
			{
				fetchOptions: {
					headers: createHeaders({ byPassCache: false })
				},
				requestPolicy: 'network-only'
			}
		)
		.toPromise()

	const { publication } = publicationInfo.data || {}

	if (!publication) {
		notFound()
	}

	const { series, seriesList } = publication || {}

	if (!series) {
		notFound()
	}

	const { posts } = series || {}

	return {
		publication,
		series,
		seriesList: seriesList.edges.map(edge => ({ ...edge.node })),
		slug: slug,
		urqlState: ssrCache.extractData(),
		initialLimit: 6,
		posts,
		currentMenuId: rawCurrentMenuId
	}
}
