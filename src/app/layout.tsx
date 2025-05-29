import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Sarthak Jain',
	description: 'Entrepreneur building AI-native systems that talk and think like humans.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
