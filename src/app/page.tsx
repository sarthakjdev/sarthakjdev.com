'use client'

import Blogs from '~/components/blogs'
import Works from '~/components/works-and-products'

export default function Home() {
	return (
		<main>
			{/* hero section */}
			<div className="flex max-w-2xl flex-col items-center justify-evenly pt-10 text-gray-600 lg:pb-5 xl:max-w-7xl xl:flex-row-reverse xl:justify-center xl:pt-20">
				<div className="relative mb-10 flex select-none px-10 xl:mb-16">
					{/* <img alt="My profile photo" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="-z-10 object-contain rounded-full aspect-square xl:w-[400px] xl:h-[400]px" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.1ec56fa4.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.1ec56fa4.jpg&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.1ec56fa4.jpg&amp;w=640&amp;q=75"> */}
					<div className="absolute left-10 top-0 -z-20 scale-110 overflow-x-hidden opacity-30 blur-2xl transition-all xl:scale-125">
						{/* <img alt="My profile photo" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="object-contain rounded-full aspect-square saturate-[3] animate-[avatar_5s_linear_infinite]" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.1ec56fa4.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.1ec56fa4.jpg&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.1ec56fa4.jpg&amp;w=640&amp;q=75"> */}
					</div>
				</div>
				<div className="flex flex-col text-center xl:mr-20 xl:text-left">
					<div className="mb-2">
						<h1 className="mb-2 text-4xl font-bold md:text-5xl ">Sarthak Jain</h1>
						<h2 className="mb-4 text-xl font-semibold">
							Software Engineer with Backend and DevOps Focus
						</h2>
					</div>
					<p className="font-content mb-8 max-w-2xl whitespace-break-spaces text-lg font-semibold lg:leading-relaxed">
						Backend Engineer & DevOps Enthusiast bridging code & infrastructure.
						Building ideas into technical reality
					</p>
				</div>
			</div>

			{/* Works and products developed */}
			<Works />

			{/* blogs */}
			<Blogs />
		</main>
	)
}
