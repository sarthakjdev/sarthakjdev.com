'use client'

import Link from 'next/link'
import { getBlogs } from '~/reusable-functions'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef, useState } from 'react'
import { type BlogPostType } from '~/types'
import LoadingSpinner from '~/components/loading-spinner'
import Button from '../design-system/button'
import { projects } from './data'
import ProjectCard from './project-card'

const Works = () => {
	const [blogs, setBlogs] = useState<BlogPostType[] | null>(null)

	const isFetched = useRef<true | null>(null)

	useEffect(() => {
		if (isFetched.current) return

		isFetched.current = true

		getBlogs(3)
			.then(data => {
				console.log(data)
				setBlogs(data)
			})
			.catch(error => console.error(error))
	}, [])

	return (
		<div className="relative bg-none px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
			<div className="relative mx-auto max-w-7xl">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold tracking-tight text-primary-500 sm:text-4xl">
						Featured Works and Products
					</h2>
					<p className="text-secondary-500 mx-auto mt-3 max-w-2xl text-xl text-gray-600 sm:mt-4">
						From Conceptualization to Code: Turning Ideas into Digital Solutions.
					</p>
				</div>

				{!blogs ? (
					<div className="flex items-center justify-center py-20">
						<LoadingSpinner />
					</div>
				) : (
					<div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
						{projects.map(project => (
							<ProjectCard project={project} key={project.slug} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Works
