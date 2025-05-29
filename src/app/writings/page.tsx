import Link from 'next/link'

export default function WritingsPage() {
	return (
		<main className="mx-auto max-w-2xl px-6 py-16">
			<div className="mb-8">
				<Link href="/" className="text-gray-600 underline hover:no-underline">
					← Back
				</Link>
			</div>

			<div className="text-lg leading-relaxed text-gray-800">
				<p>
					Coming soon: notes, essays, and quiet thoughts on product, AI, and startup
					building.
				</p>
			</div>
		</main>
	)
}
