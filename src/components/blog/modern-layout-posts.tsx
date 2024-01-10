import { Waypoint } from 'react-waypoint'

import Button from '~/components/design-system/button'
import type {
	PageInfo,
	RequiredPublicationFieldsFragment,
	PostThumbnailFragment
} from 'root/generated/graphql'
import BlogPostPreview from './blog-article-card'
import { ChevronDownSVG } from '../icons/svgs'

const PublicationPosts = (props: {
	posts: {
		edges: Array<{
			cursor: string
			node: PostThumbnailFragment
		}>
		pageInfo: Pick<PageInfo, 'hasNextPage' | 'endCursor'>
	}
	publication: Pick<RequiredPublicationFieldsFragment, 'features'>
	fetchMore: () => void
	fetching: boolean
	fetchedOnce: boolean
}) => {
	const { posts, publication, fetchMore, fetching, fetchedOnce } = props
	const { edges, pageInfo } = posts

	console.log({ edges: edges.length })

	const slicedPosts = edges.map(edge => edge.node)

	return (
		<div className="blog-articles-area mx-auto mt-10 w-full dark:border-slate-800">
			<div className="blog-articles-container container mx-auto flex w-full flex-col gap-10 px-4 py-4 xl:px-10 xl:py-10 2xl:px-24 2xl:py-5">
				{slicedPosts.map(post => (
					<BlogPostPreview key={post.id} post={post} publication={publication} />
				))}
				{fetching && (
					<>
						<div className="col-span-1 animate-pulse">
							<div
								style={{ paddingTop: '52.5%' }}
								className="mb-4 block w-full rounded-lg bg-slate-200 dark:border-slate-800"
							/>
							<div className="mb-2 h-4 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 w-2/3 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 w-1/2 rounded-lg bg-slate-200 dark:border-slate-800" />
						</div>
						<div className="col-span-1 animate-pulse">
							<div
								style={{ paddingTop: '52.5%' }}
								className="mb-4 block w-full rounded-lg bg-slate-200 dark:border-slate-800"
							/>
							<div className="mb-2 h-4 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 w-2/3 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 w-1/2 rounded-lg bg-slate-200 dark:border-slate-800" />
						</div>
						<div className="col-span-1 animate-pulse">
							<div
								style={{ paddingTop: '52.5%' }}
								className="mb-4 block w-full rounded-lg bg-slate-200 dark:border-slate-800"
							/>
							<div className="mb-2 h-4 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 w-2/3 rounded-lg bg-slate-200 dark:border-slate-800" />
							<div className="mb-2 h-4 w-1/2 rounded-lg bg-slate-200 dark:border-slate-800" />
						</div>
					</>
				)}
				{pageInfo.hasNextPage && !fetchedOnce && !fetching ? (
					<div className="col-span-1 flex flex-row justify-center py-10 md:col-span-2 lg:col-span-3">
						<Button
							type="button"
							variant="outline"
							className="w-full justify-center px-4 py-2 text-lg text-blue-600 dark:text-blue-500"
							onClick={fetchMore}
						>
							<span>Load more</span>
							<ChevronDownSVG className="ml-3 h-5 w-5 fill-current" />
						</Button>
					</div>
				) : null}
			</div>
			{fetchedOnce && pageInfo.hasNextPage ? (
				<Waypoint onEnter={fetchMore} topOffset="-20%" />
			) : null}
			{fetchedOnce && !pageInfo.hasNextPage ? (
				<div className="blog-posts-end-card font-heading mt-10 px-16 py-8 text-center font-bold text-slate-700 dark:text-slate-300">
					<p className="text-2xl">You&apos;ve reached the end! 👋</p>
				</div>
			) : null}
		</div>
	)
}

export default PublicationPosts
