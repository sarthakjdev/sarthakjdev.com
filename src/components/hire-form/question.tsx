'use client'

import { RadioGroup } from '@headlessui/react'
import { type HireStoreType, useHireFormStore } from '~/store/hire-form'
import { type QuestionType } from '~/types'

import { produce } from 'immer'
import { clsx } from 'clsx'

const HiringQuestion: React.FC<QuestionType> = props => {
	const { question, slug, type } = props

	const writeHiringStoreProperty = useHireFormStore(state => state.writeProperty)

	return (
		<section className="flex flex-col items-center justify-center gap-3">
			<h2 className="text-left text-lg font-semibold">{question}</h2>

			{type === 'objective' ? (
				<RadioGroup
					value={props.options.find(opt => opt.isAnswer)}
					onChange={val => {
						writeHiringStoreProperty(
							produce<HireStoreType>(draft => {
								const questionToUpdate = draft.questions.find(
									que => que.slug === slug
								)

								if (!questionToUpdate) return

								if (questionToUpdate.type === 'objective') {
									const optionToUpdate = questionToUpdate.options.find(
										option => option.id === val.id
									)

									if (!optionToUpdate) return

									optionToUpdate.isAnswer = true

									questionToUpdate.options = questionToUpdate.options.map(
										option => {
											if (option.id === val.id) {
												return { ...option, isAnswer: true }
											} else {
												return { ...option, isAnswer: false }
											}
										}
									)
								}
							})
						)
					}}
				>
					<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
					<div className="space-y-4">
						{props.options.map(option => (
							<RadioGroup.Option
								key={option.id}
								value={option}
								className={({ checked, active }) =>
									clsx(
										checked ? 'border-transparent' : 'border-gray-300',
										active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
										'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
									)
								}
							>
								{({ active, checked }) => (
									<>
										<div className="flex items-center">
											<div className="text-sm">
												<RadioGroup.Label
													as="p"
													className="font-medium text-gray-900"
												>
													{option.text}
												</RadioGroup.Label>
												<RadioGroup.Description
													as="div"
													className="text-gray-500"
												>
													<p className="sm:inline">{option.text}</p>{' '}
												</RadioGroup.Description>
											</div>
										</div>

										<div
											className={clsx(
												active ? 'border' : 'border-2',
												checked
													? 'border-indigo-500'
													: 'border-transparent',
												'pointer-events-none absolute -inset-px rounded-lg'
											)}
											aria-hidden="true"
										/>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			) : (
				<>
					<input type="text" />
				</>
			)}
		</section>
	)
}

export default HiringQuestion
