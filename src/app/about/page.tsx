import Link from 'next/link'

export default function NowPage() {
	return (
		<main className="mx-auto max-w-2xl px-6 py-16">
			<div className="mb-8">
				<Link href="/" className="text-gray-600 underline hover:no-underline">
					← Back
				</Link>
			</div>

			<div className="space-y-6 text-lg leading-relaxed text-gray-800">
				<p className="font-medium">As of May 2025:</p>

				<div className="ml-4 space-y-1">
					<p>– Working on deeper reasoning for WapiKit's AI system</p>
					<p>– Writing daily on LinkedIn to share my journey building in public</p>
					<p>– Talking to early believers and angel investors</p>
					<p>– Helping 0→1 founders set up fast, lean, and right</p>
				</div>
			</div>
		</main>
	)
}
