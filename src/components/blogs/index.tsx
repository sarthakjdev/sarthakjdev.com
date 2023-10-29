'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getBlogs } from '~/reusable-functions'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef, useState } from 'react'
import { type BlogPostType } from '~/types'
import LoadingSpinner from '~/components/loading-spinner'
import Button from '../design-system/button'

const Blogs = () => {
	const [blogs, setBlogs] = useState<BlogPostType[] | null>(null)

	const isFetched = useRef<true | null>(null)

	useEffect(() => {
		if (isFetched.current) return

		isFetched.current = true

		getBlogs(6)
			.then(data => {
				console.log(data)
				setBlogs(data)
			})
			.catch(error => console.error(error))
	}, [])

	return (
		<div className="bg-nonw relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
			<div className="relative mx-auto max-w-7xl">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold tracking-tight text-primary-500 sm:text-4xl">
						Technical Insights
					</h2>
					<p className="text-secondary-500 mx-auto mt-3 max-w-2xl text-xl text-gray-600 sm:mt-4 ">
						Dive into the latest thoughts, stories, and expertise from the tech and
						innovation frontier.
					</p>
				</div>

				{!blogs ? (
					<div className="flex items-center justify-center py-20">
						<LoadingSpinner />
					</div>
				) : (
					<div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
						{blogs.map(post => (
							<div
								key={post.title}
								className="flex flex-col overflow-hidden rounded-lg bg-zinc-50 shadow-xl"
							>
								<div className="flex-shrink-0">
									<Image
										className="h-48 w-full object-cover"
										src={post.coverImageUrl}
										alt=""
										height={1600}
										width={840}
									/>
								</div>
								<div className="flex flex-1 flex-col justify-between p-6">
									<div className="flex-1">
										<Link href={post.url} className="mt-2 block">
											<p className="text-xl font-semibold text-gray-900">
												{post.title}
											</p>
											<p className="text-secondary-500 mt-3 text-base">
												{post.subtitle}
											</p>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="z-50 mx-auto mt-10 flex max-w-7xl cursor-pointer items-end justify-end">
				<Link href={'https://blog.sarthakjdev.com'} target="_blank">
					<Button size={'medium'}>
						Read More Blogs <ArrowTopRightOnSquareIcon className="h-4 w-4" />
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default Blogs
