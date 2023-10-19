import React from 'react'
import RootLayoutComponent from '~/components/layouts/root-layout'

const HireLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <RootLayoutComponent>{children}</RootLayoutComponent>
}

export default HireLayout
