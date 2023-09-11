import { z } from 'zod'

export const HashnodeBlogsSchemaType = z.array(
	z.object({
		slug: z.string(),
		brief: z.string(),
		title: z.string(),
		thumbnail: z.string().nullish()
	})
)
