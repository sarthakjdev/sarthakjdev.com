'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const BlogListLayout: React.FC<
	React.PropsWithChildren<{ series: { id: string; name: string; slug: string }[] }>
> = ({ series, children }) => {
	const pathname = usePathname()

	return (
		<section className="relative mx-auto flex h-full max-w-[100rem]">
			{series.length > 0 ? (
				<aside className="fixed hidden max-w-[20rem] flex-col border-r-2 border-gray-200/40 px-10 py-8 lg:flex">
					<Link
						href={`/blog`}
						className={clsx(
							pathname === `/blog`
								? 'border-primary-600 bg-purple-50 text-primary-600'
								: 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
							'group flex items-center border-l-4 px-3 py-2 text-sm font-medium'
						)}
					>
						All Posts
					</Link>
					{series.map(item => {
						return (
							<Link
								key={item.name}
								href={`/blog/series/${item.slug}`}
								className={clsx(
									pathname === `/blog/series/${item.slug}`
										? 'border-primary-600 bg-purple-50 text-primary-600'
										: 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
									'group flex items-center border-l-4 px-3 py-2 text-sm font-medium'
								)}
							>
								{item.name}
							</Link>
						)
					})}
				</aside>
			) : null}

			{children}

			{/* <aside className="fixed left-auto right-0 hidden max-w-[20rem] flex-col border-l-2 border-gray-200/40 px-10 py-8 lg:flex">
				<Link
					href={`/blog}`}
					className={clsx(
						pathname === `/blog`
							? 'border-primary-600 bg-purple-50 text-primary-600'
							: 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
						'group flex items-center border-l-4 px-3 py-2 text-sm font-medium'
					)}
				>
					All Posts
				</Link>
				{series.map(item => {
					return (
						<Link
							key={item.name}
							href={`/series/${item.slug}`}
							className={clsx(
								pathname === `/series/${item.slug}`
									? 'border-primary-600 bg-purple-50 text-primary-600'
									: 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
								'group flex items-center border-l-4 px-3 py-2 text-sm font-medium'
							)}
						>
							{item.name}
						</Link>
					)
				})}
			</aside> */}
		</section>
	)
}

export default BlogListLayout
