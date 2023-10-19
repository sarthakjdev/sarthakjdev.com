import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

const RootLayoutComponent: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default RootLayoutComponent
