'use client'

import Image from 'next/image'
import Blogs from '~/components/blogs'
import Link from 'next/link'

export default function Home() {
	return (
		<main>
			{/* hero section */}
			<div className="mx-auto flex max-w-2xl flex-col items-center justify-evenly pt-24 text-gray-800 lg:pb-5 xl:max-w-7xl xl:flex-row-reverse xl:justify-center xl:pt-24">
				<div className="relative z-10 hidden md:flex">
					<Image
						src="/founder-section/founder.png"
						alt="founder"
						height={415}
						width={420}
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
						Building{' '}
						<Link
							href={'https://softlancer.co'}
							target="_blank"
							className="cursor-pointer text-orange-500"
						>
							Softlancer
						</Link>{' '}
						&{' '}
						<Link href={'https://wapikit.com'} target="_blank" className='cursor-pointer text-[#25D366]'>
							WapiKit
						</Link>
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
