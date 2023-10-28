import './globals.css'
import type { Metadata } from 'next'
import StandardLayout from '~/components/layouts/standard-layout'
import { Inter } from 'next/font/google'
import { clsx } from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Sarthak Jain',
	description: 'Backend and DevOps Engineer | Freelancer'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, "bg-[url('/new.png')] bg-contain")}>
				<StandardLayout>{children}</StandardLayout>
			</body>
		</html>
	)
}
