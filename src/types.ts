export type QuestionType = {
	question: string
	slug: string
} & (
	| { type: 'subjective'; answer: string | null }
	| { type: 'objective'; options: { id: string; text: string | null; isAnswer: boolean }[] }
)
