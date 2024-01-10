'use client'

import Image from 'next/image'
import Link from 'next/link'

import { techStacks } from './data'

const TechStackSection = () => {
	return (
		<div className="relative bg-none px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
			<div className="relative mx-auto max-w-7xl">
				<div className="text-center">
					<h2 className="text-2xl font-extrabold tracking-tight text-primary-500 sm:text-4xl">
						My Elegant Engineering Suite
					</h2>
					<p className="text-secondary-500 mx-auto mt-3 max-w-2xl text-lg sm:mt-4 sm:text-xl">
						Curated Tools Empowering Digital Products.
					</p>
				</div>

				<div className="relative mx-auto mt-16 grid max-w-xl grid-cols-3 grid-rows-7 gap-10 sm:grid-cols-4 md:grid-cols-5">
					{techStacks.map(item => {
						return (
							<div className="relative h-full w-full cursor-pointer" key={item.name}>
								<Link
									href={item.url}
									target="_blank"
									className=" hover: z-20 flex h-20 w-20 items-center justify-center rounded-lg transition-all duration-200 ease-linear hover:scale-105 hover:border hover:shadow-sm hover:backdrop-blur-sm"
								>
									<Image
										height={56}
										width={56}
										className="aspect-square rounded-md object-contain"
										src={item.logoUrl}
										alt={item.name}
									/>
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default TechStackSection
