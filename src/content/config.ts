import { z, defineCollection } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    public: z.boolean(),
    createdAt: z.string().transform(str => new Date(str)),
    updatedAt: z.string().transform(str => new Date(str))
  })
})

export const collections = {
  posts: postsCollection
}
