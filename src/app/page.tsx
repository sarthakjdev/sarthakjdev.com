'use client'

import Image from 'next/image'
import Blogs from '~/components/blogs'

export default function Home() {
	return (
		<main>
			{/* hero section */}
			<div className="mx-auto flex max-w-2xl flex-col items-center justify-evenly pt-24 text-gray-800 lg:pb-5 xl:max-w-7xl xl:flex-row-reverse xl:justify-center xl:pt-24">
				<div className="relative mb-10 flex select-none px-10 xl:mb-16">
					<Image
						alt="My profile photo"
						loading="lazy"
						width="300"
						height="300"
						className="aspect-square rounded-full object-contain"
						src={'/portfolio-image.png'}
					/>
				</div>
				<div className="flex flex-col text-center xl:mr-20 xl:text-left">
					<div className="mb-2">
						<h1 className="mb-2 text-4xl font-bold md:text-5xl ">Sarthak Jain</h1>
						<h2 className="mb-4 text-xl font-semibold">
							Software Engineer with Backend and DevOps Focus
						</h2>
					</div>
					<p className="font-content mb-8 max-w-2xl whitespace-break-spaces text-lg font-semibold text-gray-600 lg:leading-relaxed">
						Backend Engineer & DevOps Enthusiast bridging code & infrastructure.
						Building ideas into technical reality
					</p>
				</div>
			</div>

			{/* Works and products developed */}
			{/* <Works /> */}

			{/* blogs */}
			<Blogs />
		</main>
	)
}
