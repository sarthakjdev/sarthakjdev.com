import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<h1>Sarthak Jain</h1>

			<p>Entrepreneur building AI-native systems that talk and think like humans.</p>

			<p>
				Founder of{' '}
				<a href="https://wapikit.com" target="_blank" rel="noopener noreferrer">
					WapiKit
				</a>{' '}
				— a conversation automation platform rethinking WhatsApp-based CX.
				<br />
				Creator of{' '}
				<a href="https://javascript.wapikit.com" target="_blank" rel="noopener noreferrer">
					Wapi.js
				</a>{' '}
				and{' '}
				<a href="https://golang.wapikit.com" target="_blank" rel="noopener noreferrer">
					Wapi.go
				</a>{' '}
				— open SDKs for developers building on the WhatsApp Business API.
				<br />
				Also run{' '}
				<a href="https://softlancer.co" target="_blank" rel="noopener noreferrer">
					Softlancer
				</a>{' '}
				— helping founders take ideas from 0 to revenue.
			</p>

			<p>
				I write about product clarity, AI reasoning, startup execution, and building
				leverage quietly.
			</p>

			<div className="nav-links">
				<Link href="/about">→ About</Link>
				<Link href="/writings">→ Writings</Link>
				<Link href="/now">→ Now</Link>
			</div>

			<div style={{ marginTop: '3rem', color: '#666', fontSize: '0.9rem' }}>
				<a
					href="https://linkedin.com/in/sarthakjdev"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
				{' · '}
				<a href="https://github.com/sarthakjdev" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
				{' · '}
				<a href="https://twitter.com/sarthakjdev" target="_blank" rel="noopener noreferrer">
					Twitter
				</a>
				{' · '}
				<a
					href="https://instagram.com/sarthakjdev"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram
				</a>
			</div>
		</main>
	)
}
