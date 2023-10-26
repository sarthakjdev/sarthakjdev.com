'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import Button from '~/components/design-system/button'

import Navlinks from './nav-links'
import { type SVGAttributes } from 'react'

function MenuIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M5 6h14M5 18h14M5 12h14"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function ChevronUpIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
			<path
				d="M17 14l-5-5-5 5"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function MobileNavLink({ children, ...props }) {
	return (
		<Popover.Button
			as={Link}
			className="block text-base leading-7 tracking-tight text-gray-700"
			{...props}
			href={''}
		>
			{children}
		</Popover.Button>
	)
}

const Header = () => {
	return (
		<header>
			<nav>
				<div className="relative z-50 mx-auto flex max-w-7xl justify-between px-4 py-8 sm:px-6 lg:px-8">
					<div className="relative z-10 flex items-center gap-16">
						<Link href="/" aria-label="Home">
							<h2 className="text-xl font-black">sarthak</h2>
						</Link>
						<div className="hidden lg:flex lg:gap-10">
							<Navlinks />
						</div>
					</div>
					<div className="flex items-center gap-6">
						<Popover className="lg:hidden">
							{({ open }) => (
								<>
									<Popover.Button
										className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
										aria-label="Toggle site navigation"
									>
										{({ open }) =>
											open ? (
												<ChevronUpIcon className="h-6 w-6" />
											) : (
												<MenuIcon className="h-6 w-6" />
											)
										}
									</Popover.Button>
									<AnimatePresence initial={false}>
										{open && (
											<>
												<Popover.Overlay
													static
													as={motion.div}
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
												/>
												<Popover.Panel
													static
													as={motion.div}
													initial={{ opacity: 0, y: -32 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{
														opacity: 0,
														y: -32,
														transition: { duration: 0.2 }
													}}
													className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
												>
													<div className="space-y-4">
														<MobileNavLink href="#features">
															Features
														</MobileNavLink>
														<MobileNavLink href="#reviews">
															Reviews
														</MobileNavLink>
														<MobileNavLink href="#pricing">
															Pricing
														</MobileNavLink>
														<MobileNavLink href="#faqs">
															FAQs
														</MobileNavLink>
													</div>
													<div className="mt-8 flex flex-col gap-4">
														<Link href={'/hire'}>
															<Button>Hire</Button>
														</Link>
														<Link
															href={'https://call.sarthakjdev.com'}
															target="_blank"
														>
															<Button variant="outline">
																Get on a call
															</Button>
														</Link>
													</div>
												</Popover.Panel>
											</>
										)}
									</AnimatePresence>
								</>
							)}
						</Popover>
						<Link href={'https://call.sarthakjdev.com'}>
							<Button>Hire for work</Button>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
