import { createHeaders, createSSRExchange, getServerSideUrqlClient } from '~/hashnode-api/client'
import {
	HomePageInitialDocument,
	type HomePageInitialQueryVariables,
	HomePagePostsDocument,
	type HomePagePostsQueryVariables,
	PublicationLayout
} from 'root/generated/graphql'
import { HASHNODE_PUBLICATION_HOST } from '~/constant'

export async function getBlogHomePageData() {
	const ssrExchange = createSSRExchange()

	if (!ssrExchange) {
		throw new Error('SSR exchange not found!!!')
	}

	const urqlClient = getServerSideUrqlClient(ssrExchange)

	if (!HASHNODE_PUBLICATION_HOST) {
		throw new Error('NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST is undefined!!!')
	}

	const homePageInitialQueryVariables: HomePageInitialQueryVariables = {
		host: HASHNODE_PUBLICATION_HOST
	}
	const publicationInfo = await urqlClient
		.query(HomePageInitialDocument, homePageInitialQueryVariables, {
			fetchOptions: {
				headers: createHeaders({ byPassCache: true })
			},
			requestPolicy: 'network-only'
		})
		.toPromise()

	if (publicationInfo.error) {
		console.error('Error while fetching publication info', {
			variables: homePageInitialQueryVariables,
			error: publicationInfo.error
		})
		throw publicationInfo.error
	}

	if (!publicationInfo.data?.publication) {
		return null
	}

	const { publication } = publicationInfo.data

	const subtractValue = publication.pinnedPost ? 1 : 0
	const initialLimit =
		publication.preferences.layout === PublicationLayout.Magazine
			? 12 - subtractValue
			: 6 - subtractValue

	const homePagePostsVariables: HomePagePostsQueryVariables = {
		host: HASHNODE_PUBLICATION_HOST,
		first: initialLimit,
		filter: { excludePinnedPost: !!publication.pinnedPost }
	}
	const homePagePostsResponse = await urqlClient
		.query(HomePagePostsDocument, homePagePostsVariables, {
			fetchOptions: {
				headers: createHeaders({ byPassCache: false })
			},
			requestPolicy: 'network-only'
		})
		.toPromise()
	if (homePagePostsResponse.error) {
		console.error('Error while fetching home page posts', {
			error: homePagePostsResponse.error,
			variables: homePagePostsVariables
		})
		throw homePagePostsResponse.error
	}

	if (!homePagePostsResponse.data?.publication) {
		console.error('Publication not found fetching home page posts; returning 404', {
			variables: homePagePostsVariables
		})
		return null
	}

	return {
		publication,
		initialLimit,
		series: publicationInfo.data.publication.seriesList.edges.map(node => ({ ...node.node })),
		urqlState: ssrExchange.extractData(),
		host: HASHNODE_PUBLICATION_HOST,
		isHome: true
	}
}
