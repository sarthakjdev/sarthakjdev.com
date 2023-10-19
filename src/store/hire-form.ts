import { create } from 'zustand'
import { type QuestionType } from '~/types'

const questions: QuestionType[] = [
	{
		question: 'Name',
		type: 'subjective',
		answer: null,
		slug: 'name'
	},
	{
		question: 'Contact Email',
		type: 'subjective',
		slug: 'email',
		answer: null
	},
	{
		question: 'Work Phone',
		type: 'subjective',
		slug: 'email',
		answer: null
	},
	{
		question: 'Industry',
		type: 'objective',
		slug: 'industry',
		options: [
			{
				id: 'it',
				text: 'information technology',
				isAnswer: false
			}
		]
	},
	{
		question: 'requirement',
		type: 'subjective',
		slug: 'explain-your-requirement',
		answer: null
	}
]

export type HireStoreType = {
	questions: QuestionType[]
	activeQuestionSlug: string
	writeProperty: (updates: WritePropertyParamType | (() => HireStoreType)) => void
}

type WritePropertyParamType = {
	[K in keyof HireStoreType]?: HireStoreType[K]
}

const useHireFormStore = create<HireStoreType>(set => ({
	activeQuestionSlug: 'name',
	questions: questions,
	writeProperty: updates => {
		if (typeof updates === 'object') {
			set(state => ({
				...state,
				...updates
			}))
		} else {
			const updatedState = updates()
			set({
				...updatedState
			})
		}
	},
	resetStore: set(() => ({ questions: questions, activeQuestion: 0 }))
}))

export { useHireFormStore }
