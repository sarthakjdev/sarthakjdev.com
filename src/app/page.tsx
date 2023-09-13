'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '~/components/footer'

const navigation = [
	{ name: 'Blogs', href: '#' },
	{ name: 'Reviews', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' }
]

// const slidesList = [
// 	{
// 		title: 'Netflix Jobs',
// 		image: '/slides/netflix-jobs.jpg',
// 		style: 'z-10 transform scale-[0.67] -translate-x-[4.23px] -translate-y-[105px]'
// 	},
// 	{
// 		title: 'TikTok',
// 		image: '/slides/tiktok.png',
// 		style: ' z-20 transform scale-[0.77] -translate-x-[27.27px] -translate-y-[70px] translate[0px]'
// 	},
// 	{
// 		title: 'Twitch',
// 		image: '/slides/twitch.jpg',
// 		style: 'z-30 transform scale-[0.88] -translate-x-[25.24px] -translate-y-[35px] translate[0px]'
// 	},
// 	{
// 		title: 'Hulu',
// 		image: '/slides/hulu.png',
// 		style: 'z-40 transform scale-100 translate-x-[0px] translate[0px]'
// 	},
// 	{
// 		title: 'Notion',
// 		image: '/slides/notion.png',
// 		style: 'z-30 transform scale-[0.88] translate-x-[25.24px] -translate-y-[35px] translate[0px]'
// 	},
// 	{
// 		title: 'Target',
// 		image: '/slides/target.png',
// 		style: 'z-20 transform scale-[0.77] translate-x-[27.27px] -translate-y-[70px] translate[0px]'
// 	},
// 	{
// 		title: 'Nike',
// 		image: '/slides/nike.jpg',
// 		style: 'z-10 transform scale-[0.67] translate-x-[4.23px] -translate-y-[70px] translate[0px]'
// 	}
// ]

export default function Home() {
	return (
		<main>
			{/* hero section */}
			<div className="relative overflow-hidden bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
						<svg
							className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>

						<Popover>
							<div className="relative px-4 pt-6 sm:px-6 lg:px-8">
								<nav
									className="relative flex items-center justify-between sm:h-10 lg:justify-start"
									aria-label="Global"
								>
									<div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
										<div className="flex w-full items-center justify-between md:w-auto">
											<Link href="#">
												<span className="sr-only">Workflow</span>
												<Image
													width={500}
													height={500}
													alt=""
													className="h-8 w-auto sm:h-10"
													src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
												/>
											</Link>
											<div className="-mr-2 flex items-center md:hidden">
												<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
													<span className="sr-only">Open main menu</span>
													<HiMenuAlt1
														className="h-6 w-6"
														aria-hidden="true"
													/>
												</Popover.Button>
											</div>
										</div>
									</div>
									<div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
										{navigation.map(item => (
											<Link
												key={item.name}
												href={item.href}
												className="font-medium text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</Link>
										))}
										<Link
											href="#"
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Log in
										</Link>
									</div>
								</nav>
							</div>

							<Transition
								as={Fragment}
								enter="duration-150 ease-out"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="duration-100 ease-in"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Popover.Panel
									focus
									className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
								>
									<div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
										<div className="flex items-center justify-between px-5 pt-4">
											<div>
												<Image
													width={500}
													height={500}
													className="h-8 w-auto"
													src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
													alt=""
												/>
											</div>
											<div className="-mr-2">
												<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
													<span className="sr-only">Close main menu</span>
													<AiOutlineClose
														className="h-6 w-6"
														aria-hidden="true"
													/>
												</Popover.Button>
											</div>
										</div>
										<div className="space-y-1 px-2 pb-3 pt-2">
											{navigation.map(item => (
												<Link
													key={item.name}
													href={item.href}
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
												>
													{item.name}
												</Link>
											))}
										</div>
										<Link
											href="#"
											className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
										>
											Log in
										</Link>
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>

						<main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<div className="sm:text-center lg:text-left">
								<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block xl:inline">Data to enrich your</span>{' '}
									<span className="block text-indigo-600 xl:inline">
										online business
									</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
									lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
									fugiat aliqua.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<Link
											href="#"
											className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
										>
											Get started
										</Link>
									</div>
									<div className="mt-3 sm:ml-3 sm:mt-0">
										<Link
											href="#"
											className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:px-10 md:py-4 md:text-lg"
										>
											Live demo
										</Link>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						width={500}
						height={500}
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
						src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
						alt=""
					/>
				</div>
			</div>

			{/* main testimonial */}
			<section>
				<div className="bg-white pt-16 lg:py-24">
					<div className="bg-indigo-600 pb-16 lg:relative lg:z-10 lg:pb-0">
						<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
							<div className="relative lg:-my-8">
								<div
									aria-hidden="true"
									className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
								/>
								<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
									<div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl shadow-xl lg:h-full">
										<img
											className="object-cover lg:h-full lg:w-full"
											src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
								<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
									<blockquote>
										<div>
											<svg
												className="h-12 w-12 text-white opacity-25"
												fill="currentColor"
												viewBox="0 0 32 32"
												aria-hidden="true"
											>
												<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
											</svg>
											<p className="mt-6 text-2xl font-medium text-white">
												Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Sed urna nulla vitae laoreet augue. Amet
												feugiat est integer dolor auctor adipiscing nunc
												urna, sit.
											</p>
										</div>
										<footer className="mt-6">
											<p className="text-base font-medium text-white">
												Judith Black
											</p>
											<p className="text-base font-medium text-indigo-100">
												CEO at PureInsights
											</p>
										</footer>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* work section */}
			<section>
				<h2>Works</h2>
			</section>

			<section>
				<h2></h2>
			</section>

			{/* tech skills */}
			{/* <section>
				<div className="customers-main border-white92 bg-white98 m-0 flex flex-col items-center justify-center border py-28">
					<div className="case-studies-box relative -mt-36  mb-16 text-center">
						<div className="slider-wrapper m-auto flex h-20 items-center justify-between rounded-md bg-white p-4 text-center  shadow-2xl">
							<div className="content flex items-center justify-between gap-x-16 gap-y-5">
								<div className="relative flex w-36 items-center justify-center">
									<Image src="/logo-list2/6.svg" alt="" height={36} width={105} />
								</div>
								<Link
									href=""
									className="bg-blue shadow-ex-md-blue h-11 w-full rounded-md px-14 leading-10 text-white"
								>
									Read Case Study
								</Link>
							</div>
						</div>
					</div>
					<div className="title mb-20 flex flex-col items-center justify-center  text-center">
						<h2 className=" mb-4 text-4xl font-bold leading-snug tracking-tighter">
							Who&apos;s Using Next.js
						</h2>
						<h3 className="text-gray text-base font-normal">
							We&apos;re honored some of the most talented creatives out there build
							with Next.js
						</h3>
					</div>
					<div className="showcase-container-tablet relative mb-8 mt-12">
						<div className="showcase-container-tablet overlay absolute -bottom-8 left-0 right-0 top-0 z-10"></div>
						<div className="slides flex flex-wrap">
							{slidesList.map((slideItem, index) => (
								<div
									className="showcase-container-tablet slide flex-1 flex-shrink flex-grow basis-1/2 p-2 "
									key={index}
								>
									<Image
										src={slideItem.image}
										alt={slideItem.title}
										height={185}
										width={330}
										className="mx-auto block flex-shrink-0 rounded-md shadow-md"
									/>
								</div>
							))}
						</div>
					</div>
					<div className="showcase-container-desktop mx-auto mb-8 mt-16 hidden overflow-x-hidden bg-purple-600">
						<div className="slides mt-12 flex  bg-red-900">
							{slidesList.map((slideItem, index) => (
								<div
									className={`relative flex h-[185px] w-[330px] cursor-pointer overflow-hidden rounded-md bg-white shadow-lg transition-all ease-linear`}
									key={index}
								>
									<Image
										src={slideItem.image}
										alt={slideItem.title}
										height={185}
										width={330}
										className=" "
									/>
									<div className="info bg-gray8 duration-600 ease absolute bottom-0 w-full p-4 text-center text-white opacity-0 transition-opacity hover:opacity-100">
										<h3 className="text-base font-normal">{slideItem.title}</h3>
									</div>
								</div>
							))}
						</div>
					</div>
					<Link
						href=""
						className="bg-blue shadow-ex-md-blue h-11 rounded-md px-14 leading-10 text-white"
					>
						View Showcase
					</Link>
				</div>
			</section> */}

			<Footer />
		</main>
	)
}
