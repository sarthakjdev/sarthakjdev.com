/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useCallback, useEffect } from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types';
// import styled, { css, createGlobalStyle } from 'styled-components';

/* --------------------------- Image Dependencies --------------------------- */
// import { Close, Github, Product } from '../Icons';
// import Close from "../../../public/utils/close.svg"

/* ------------------------- SideBarModal propTypes ------------------------ */

interface ISideBarModal {
	show: boolean
	closeShow: () => void
	size?: 'sm' | 'lg' | 'md'
	overlayColor?: string
	data?: {
		title: string
		description?: string
		technologies?: string[]
		github?: string
		imageUrl?: string
		about?: string
		link?: string
	}
}
/* ------------------------ SideBarModal defaultprops ----------------------- */
const defaultProps: ISideBarModal = {
	show: false,
	closeShow: () => {},
	size: 'md',
	overlayColor: 'rgba(0, 0, 0, 0.8)'
}

const SideBarModal: React.FC<ISideBarModal> = ({ show, closeShow, size, overlayColor, data }) => {
	const handleKeyPress = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeShow()
		}
	}, [])

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress)

		return () => {
			window.removeEventListener('keydown', handleKeyPress)
		}
	}, [])
	return (
		<>
			{show && data && (
				<>
					{/* <Body /> */}
					<div size={size} data-testid="sidebarmodal ">
						<div
							overlayColor={overlayColor}
							className="overlay fixed right-0 top-0 z-50 h-full w-full bg-neutral-800"
							onClick={() => closeShow()}
						/>
						<aside
							className={`fadeInLeft  fixed right-0 top-0 z-50 h-full transition-all duration-300 ease-linear will-change-transform  ${(props: {
								size: ISideBarModal['size']
							}) => generateSize(props.size)}`}
						>
							<div className="pos__relative">
								<div className="d-flex justify-content-between header mb-8 border-b-2 pb-3 ">
									<button
										onClick={() => closeShow()}
										className="none-button border-none bg-transparent pl-0 "
										type="button"
									>
										<Image
											src="./../../public/utils/close.svg"
											alt="close icon"
											height={24}
											width={24}
										/>
									</button>
									<a
										href="#"
										onClick={e => {
											e.preventDefault()
											closeShow()
										}}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-black "
									>
										Back To Projects.
									</a>
								</div>

								<div className="main__post font-extrabold ">
									<h3 className="mt-4">{data.title}</h3>
									<p className="mb-4 text-sm">{data.description}</p>
									<Image
										src={data.imageUrl}
										alt={data.title}
										width={300}
										height={300}
										className="rounded-xl object-cover"
									/>
									<h4 className="mb-3 mt-8 text-base">About</h4>
									<p className="text-sm">{data.about && data.about}</p>
									<h4 className="mb-3 mt-8 text-base">Technologies</h4>

									{data.technologies && (
										<p className="d-flex flex-wrap text-sm">
											{data.technologies.map((tech, index) => (
												<span key={index} className="d-block mb-1">
													{tech}
												</span>
											))}
										</p>
									)}
									<h4 className="mb-3 mt-8 text-base">
										<Image
											src="./../../public/utils/product.svg"
											alt="product icon"
											height={24}
											width={24}
											className="mr-1 w-4 align-bottom"
										/>{' '}
										Website
									</h4>
									<p className="text-sm">
										<a
											href={data.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{data.link}
										</a>
									</p>

									{data.github && (
										<>
											<h4 className="mb-3 mt-8 text-base">
												<Image
													src="./../../public/utils/github.svg"
													alt="github icon"
													height={24}
													width={24}
													className="mr-1 w-4 align-bottom"
												/>{' '}
												Github
											</h4>
											<p className="text-sm">
												<a
													href={data.github}
													target="_blank"
													rel="noopener noreferrer"
													className="font-semibold"
												>
													{data.github}
												</a>
											</p>
										</>
									)}
								</div>
								<a
									href={data.link}
									className="open__project fixed bottom-0 left-0 w-full p-4 text-center text-sm font-semibold text-white"
									target="_blank"
									id="cardHover"
									rel="noopener noreferrer"
								>
									Open Project{' '}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="#fff"
										className="ml-1 w-4 "
									>
										<path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
									</svg>
								</a>
							</div>
						</aside>
					</div>
				</>
			)}
		</>
	)
}

const generateSize = (size: ISideBarModal['size']) => {
	if (size === 'sm')
		return `
      width: 21.8em;
      padding: 1.5rem;
    `
	if (size === 'lg')
		return `
      width: 34em;
    `
	if (size === 'md')
		return `
      width: 29em;
      padding: 2rem;
    `
}
// const Wrapper = styled.div`

//   aside {
//     background: var(--bg);

//     @media (max-width: 768px) {
//       width: 100% !important;
//     }
//     }
//     .header {
//       border-bottom: 1px solid var(--border-color);}
//       a {
//         color: var(--sidebar-cta);
//       }
//     }
//     .pos__relative {
//       position: relative;
//       padding: 2rem 2rem 4rem;
//       overflow-x: overlay;
//       max-height: 100%;
//     }
//     .open__project {
//       background: var(--sidebar-cta);
//     }
//   }
//   .main__post {
//     h3 {
//       font-size: calc(var(--font-x-md) - 6px);
//       color: var(--cw);    }
//     h4 {
//       // font-size: var(--font-md);  done
//       color: var(--cw);
//     }
//     p {
//       color: var(--article-color);
//       span {
//         background: var(--sidebar-tag);
//         padding: 6px 13px;
//         border-radius: 4px;
//         text-transform: capitalize;
//         font-size: 11px;
//         margin-right: 6px;
//         color: var(--cw);
//         font-weight: 700;
//       }
//       a {
//         color: var(--sidebar-cta);
//         svg {
//           fill: var(--cw);
//         }
//       }
//     }
//   }
// `
SideBarModal.defaultProps = defaultProps

export default SideBarModal
