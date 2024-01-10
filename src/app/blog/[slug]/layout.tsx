import React from 'react'

const BlogPostLayout: React.FC<React.PropsWithChildren<{ params: { slug: string } }>> = async ({
	children
}) => {
	return <>{children}</>
}

export default BlogPostLayout
