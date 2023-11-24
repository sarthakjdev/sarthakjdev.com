/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState } from 'react'
import Image from 'next/image'
// import styled from 'styled-components';
import { useRouter } from 'next/navigation'
/* -------------------------- Internal Dependencies ------------------------- */
// import Image from '../Image';
import SideBarModal from '../sidebar-modal'

/* -------------------------- MansoryItem PropTypes ------------------------- */
interface MansoryItemProps {
	item: {
		title: string
		description?: string
		imageUrl: string
		link?: string
		github?: string
		about?: string
		technologies?: string[]
	}
}

export const arrayRandomItem = array => {
	return array[(Math.random() * array.length) | 0]
}

const MansoryItem: React.FC<MansoryItemProps> = ({ item }) => {
	const router = useRouter()
	const { pathname } = router
	const [show, setShow] = useState(false)
	const [height] = useState(arrayRandomItem(['400px', '454px', '310px']))

	return (
		<>
			{!pathname.includes('/projects') ? (
				<a
					href={item.link}
					target="_blank"
					style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
					rel="noopener noreferrer"
					title={item.title}
					id="cardHover"
					aria-label={`${item.title} ${item.description}`}
				>
					<div
						{...{ item }}
						style={{
							height
						}}
						role="gridcell"
						className="mansoryItemStyle relative flex cursor-pointer break-inside-avoid items-end overflow-hidden rounded-lg bg-center bg-no-repeat object-cover px-8 py-6 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:block after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:opacity-[0.3]    hover:cursor-none hover:after:opacity-100 focus:cursor-none focus:after:opacity-100"
					>
						<Image
							src={item.imageUrl}
							alt={item.imageUrl}
							height={}
							width={}
							className="absolute left-0 top-0 object-cover"
						/>
						<div className="content__slate">
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					</div>
				</a>
			) : (
				<>
					<div
						{...{ item }}
						style={{
							height
						}}
						role="gridcell"
						id="cardHover"
						aria-label={`${item.title} ${item.description}`}
						onClick={() => setShow(true)}
						onKeyPress={e => {
							if (e.key === 'Enter') return setShow(true)
						}}
						tabIndex={0}
						className="mansoryItemStyle relative flex cursor-pointer break-inside-avoid items-end overflow-hidden rounded-lg bg-center bg-no-repeat object-cover px-8 py-6 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:block after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:opacity-[0.3]    hover:cursor-none hover:after:opacity-100 focus:cursor-none focus:after:opacity-100"
					>
						<Image
							src={item.imageUrl}
							alt={item.imageUrl}
							height={}
							width={}
							className="absolute left-0 top-0 object-cover"
						/>
						<div className="content__slate translate-y-[10%] opacity-0  transition-all delay-0 duration-300 ease-in-out hover:z-50 hover:transform-none hover:opacity-100 focus:z-50 focus:transform-none focus:opacity-100">
							<h3 className="text-base font-extrabold text-white">{item.title}</h3>
							<p className="text-sm text-[#d5d5d5]">{item.description}</p>
							{item.technologies && (
								<p className="d-flex flex-wrap">
									{item.technologies.map((tech: string, index: number) => (
										<span
											key={index}
											className="d-block mb-1 mr-1 rounded-[50px] bg-[#696869] px-2 py-1 text-xs font-medium capitalize text-white"
										>
											{tech}
										</span>
									))}
								</p>
							)}
						</div>
					</div>

					<SideBarModal
						show={show}
						closeShow={() => setShow(false)}
						size="lg"
						data={item}
					/>
				</>
			)}
		</>
	)
}

// const MansoryItemStyle = styled.div`
// 	margin: 0 0 1.5em;
// 	background-color: var(--button-index);
// 	img {
// 		width: 100% !important;
// 		height: 100% !important;
// 	}
// 	p {
// 		font-size: calc(var(--font-sm) + 0.9px);
// 	}

// 	}
// `

export default MansoryItem
