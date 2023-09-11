'use server'

import type { GetStaticPaths, GetServerSideProps, InferGetStaticPropsType } from 'next'

import { HashnodeBlogsSchemaType } from '../../schema'

export const getStaticProps: GetServerSideProps<{
	blogs: Zod.infer<typeof HashnodeBlogsSchemaType>
}> = async () => {
	try {
		const articleQuery = `
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
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query: articleQuery })
		})
			.then(res => res.json())
			.then(blogs => HashnodeBlogsSchemaType.parse(blogs))

		console.log(response)

		return {
			props: {
				blogs: response
			}
		}
	} catch (error) {
		return {
			props: {
				blogs: []
			},
			notFound: true,
			redirect: '/'
		}
	}
}

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: true
	}
}

const Blogs: React.FC<{ blogs: InferGetStaticPropsType<typeof getStaticProps> }> = () => {
	return <></>
}

export default Blogs
