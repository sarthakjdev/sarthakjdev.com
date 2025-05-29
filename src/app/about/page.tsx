import Link from 'next/link'

export default function About() {
	return (
		<main>
			<Link href="/" className="back-link">
				← Home
			</Link>

			<p>
				I started as a freelancer in 2021. Dropped out of college to build things I believed
				in.
			</p>

			<p>
				Today, I'm building WapiKit — an AI-native WhatsApp platform that helps brands hold
				real conversations with customers, automatically and empathetically. Not chatbots.
				Real dialogue.
			</p>

			<p>
				I've also created{' '}
				<a href="https://javascript.wapikit.com" target="_blank" rel="noopener noreferrer">
					Wapi.js
				</a>{' '}
				and{' '}
				<a href="https://golang.wapikit.com" target="_blank" rel="noopener noreferrer">
					Wapi.go
				</a>{' '}
				— open SDKs to make WhatsApp Business API integration dead-simple for developers.
				Both are now used by indie makers and agencies.
			</p>

			<p>
				At Softlancer, I work with early-stage founders to rapidly go from idea to MVP to
				paying customers — with infrastructure, product, and GTM done right from day one.
			</p>

			<p>
				I believe in compounding through clarity, building with speed and empathy, and
				writing often to think better.
			</p>
		</main>
	)
}
