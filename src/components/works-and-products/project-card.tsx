import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { type projects } from './data'
import Link from 'next/link'

export const arrayRandomproject = (array: string[]) => {
	return array[(Math.random() * array.length) | 0]
}

const ProjectCard: React.FC<{ project: (typeof projects)[0] }> = ({ project }) => {
	const pathname = usePathname()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setShow] = useState(false)
	const [height] = useState(arrayRandomproject(['400px', '454px', '310px']))

	return (
		<>
			{!pathname.includes('/projects') ? (
				<Link
					href={project.productionUrl || project.docsUrl || project.githubUrl}
					target="_blank"
					style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
					rel="noopener noreferrer"
					title={project.title}
					id="cardHover"
					aria-label={`${project.title} ${project.description}`}
				>
					<div
						{...{ project }}
						style={{
							height
						}}
						role="gridcell"
						className="mansoryprojectStyle projects-end relative flex cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-center bg-no-repeat object-cover px-8 py-6 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:block after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:opacity-[0.3]    hover:cursor-none hover:after:opacity-100 focus:cursor-none focus:after:opacity-100"
					>
						<Image
							src={project.coverImageUrl}
							alt={project.slug}
							height={100}
							width={100}
							className="absolute left-0 top-0 object-cover"
						/>
						<div className="content__slate">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</div>
					</div>
				</Link>
			) : (
				<>
					<div
						{...{ project }}
						style={{
							height
						}}
						role="gridcell"
						id="cardHover"
						aria-label={`${project.title} ${project.description}`}
						onClick={() => setShow(true)}
						onKeyPress={e => {
							if (e.key === 'Enter') return setShow(true)
						}}
						tabIndex={0}
						className="projects-end relative flex cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-center bg-no-repeat object-cover px-8 py-6 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:block after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:opacity-[0.3]    hover:cursor-none hover:after:opacity-100 focus:cursor-none focus:after:opacity-100"
					>
						<Image
							src={project.coverImageUrl}
							alt={project.slug}
							height={100}
							width={100}
							className="absolute left-0 top-0 object-cover"
						/>
						<div className="content__slate translate-y-[10%] opacity-0  transition-all delay-0 duration-300 ease-in-out hover:z-50 hover:transform-none hover:opacity-100 focus:z-50 focus:transform-none focus:opacity-100">
							<h3 className="text-base font-extrabold text-white">{project.title}</h3>
							<p className="text-sm text-[#d5d5d5]">{project.description}</p>
							{project.tags && (
								<p className="d-flex flex-wrap">
									{project.tags.map((tech: string, index: number) => (
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
				</>
			)}
		</>
	)
}

export default ProjectCard
