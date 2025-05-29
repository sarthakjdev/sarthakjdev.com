import Link from 'next/link'

export default function Now() {
	return (
		<main>
			<Link href="/" className="back-link">
				← Home
			</Link>

			<p>
				<strong>As of May 2025:</strong>
			</p>

			<p>
				– Refining WapiKit's AI agent to handle sales and support with full customer context
				<br />– Writing daily on LinkedIn about startup building and real AI use
				<br />– Talking to founders, early believers, and future collaborators
				<br />– Avoiding noise. Optimizing for long-term clarity and trust
			</p>

			<hr style={{ margin: '2rem 0' }} />

			<blockquote style={{ fontStyle: 'italic', opacity: 0.7 }}>
				It takes time, not idle time, to build something meaningful.
			</blockquote>

			<blockquote style={{ fontStyle: 'italic', opacity: 0.7, marginTop: '1rem' }}>
				Waiting is not working. Most progress comes when you're actively shaping the
				problem.
			</blockquote>
		</main>
	)
}
