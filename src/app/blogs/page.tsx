'use client'

import { useState } from 'react'
import { HashnodeBlogsSchemaType } from '../../schema'
import ms from 'ms'

export const revalidate = ms('12h') / 1000

async function getPaginatedBlogs(params: { pageNumber: number; pageSize: number }) {
	try {
		// ! TODO: use hashnode api 2.0 here
		const blogQuery = `
		    query GetUserArticles($page: Int!) {
		        user(username: "sarthakjdev") {
		            publication {
		                posts(page: $page) {
		                    title
		                    brief
		                    slug
		                }
		            }
		        }
		    }
		`

		const response = await fetch('https://api.hashnode.com/', {
			cache: 'no-cache',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query: blogQuery, variables: { page: params.pageNumber } })
		})

		if (!response.ok) {
			console.error(response)
			return []
		} else {
			// parse the response
			const data = response.json()
			// failure of parsing, will be handled in catch block
			HashnodeBlogsSchemaType.parse(data)
			return data
		}
	} catch (error) {
		console.log(error)
		return []
	}
}

export function generateStaticParams() {
	return []
}

const Blogs: React.FC = () => {
	const [paginationMeta] = useState<{ page: number; pageSize: number }>({
		page: 1,
		pageSize: 10
	})

	getPaginatedBlogs({ pageNumber: paginationMeta.page, pageSize: paginationMeta.pageSize })

	return <></>
}

export default Blogs
