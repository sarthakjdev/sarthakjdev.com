import Link from 'next/link'

export default function Writings() {
	return (
		<main>
			<Link href="/" className="back-link">
				← Home
			</Link>

			<p>
				Coming soon: essays, product notes, and quiet thoughts on AI, product building, and
				startup leverage.
			</p>
		</main>
	)
}
