'use client'

import Footer from '../footer'
import React from 'react'
import Navbar from '../navbar'

const StandardLayout: React.FC<
	React.PropsWithChildren<{
		navbarProps?: { transparent: boolean }
	}>
> = ({ children }) => {
	return (
		<div className="root">
			<div id="layout-mid-container" className=" relative flex flex-1 overflow-clip">
				<div id="layout-desktop-content-container" className="flex w-full flex-1 flex-col">
					<Navbar />
					<div className="pt-16">
						<div>{children}</div>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StandardLayout
