'use client'

import { useParams, notFound } from 'next/navigation'
import HiringQuestion from '~/components/hire-form/question'
import { useHireFormStore } from '~/store/hire-form'

const Question = () => {
	const params = useParams()

	const questionSlug = params.slug

	const question = useHireFormStore(state =>
		state.questions.find(question => question.slug === questionSlug)
	)

	if (!question) {
		notFound()
	}
	return <HiringQuestion key={question.slug} {...question} />
}

export default Question
