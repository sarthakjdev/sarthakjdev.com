import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Sarthak Jain',
	description: 'Entrepreneur building AI-native systems that think and talk like humans.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-white font-serif text-gray-900 antialiased">{children}</body>
		</html>
	)
}
