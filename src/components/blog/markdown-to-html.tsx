'use client'

import { useEmbeds } from '~/hooks/use-embeds'
import { markdownToHtml } from '~/utils/blog/markdown-to-html'
import { memo } from 'react'

type Props = {
	contentMarkdown: string
}

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
	const content = markdownToHtml(contentMarkdown)

	console.log({ content })

	useEmbeds({ enabled: true })

	return (
		<div
			className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	)
}

export const MarkdownToHtml = memo(_MarkdownToHtml)
