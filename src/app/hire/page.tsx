'use client'

import { useRouter } from 'next/navigation'
import Button from '~/components/design-system/button'
import { useHireFormStore } from '~/store/hire-form'

const HireForFreelanceWork = () => {
	const activeQuestionSlug = useHireFormStore(state => state.activeQuestionSlug)
	const router = useRouter()

	return (
		<div className="items-center bg-white py-24">
			<div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
				<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					<span className="block">Ready to dive in?</span>
					<span className="block">Start your free trial today.</span>
				</h2>
				<div className="mt-8 flex justify-center">
					<div className="inline-flex rounded-md shadow">
						<Button
							onClick={() => {
								router.push(`/hire/${activeQuestionSlug}`)
							}}
						>
							Get started
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HireForFreelanceWork
