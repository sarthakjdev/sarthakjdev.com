import Link from 'next/link'

export default function HomePage() {
	return (
		<main className="mx-auto max-w-2xl px-6 py-16">
			<h1 className="mb-8 text-4xl font-normal text-gray-900">Sarthak Jain</h1>

			<div className="space-y-6 text-lg leading-relaxed text-gray-800">
				<p>Entrepreneur building AI-native systems that think and talk like humans.</p>

				<p>
					Founder of{' '}
					<a
						href="https://wapikit.com"
						className="text-gray-900 underline hover:no-underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						WapiKit
					</a>{' '}
					— a conversation automation platform rethinking how brands talk to customers.
					<br />
					Also run{' '}
					<a
						href="https://softlancer.co"
						className="text-gray-900 underline hover:no-underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Softlancer
					</a>{' '}
					— a quiet partner studio for early-stage founders.
				</p>

				<p>Writing about product clarity, startup execution, and AI with a soul.</p>

				<div className="space-y-2 pt-4">
					<div>
						<Link href="/about" className="text-gray-900 underline hover:no-underline">
							→ About
						</Link>
					</div>
					<div>
						<Link
							href="/writings"
							className="text-gray-900 underline hover:no-underline"
						>
							→ Writings
						</Link>
					</div>
					<div>
						<Link href="/now" className="text-gray-900 underline hover:no-underline">
							→ Now
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}
