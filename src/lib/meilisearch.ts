import type { CollectionEntry } from 'astro:content'
import { MeiliSearch } from 'meilisearch'
import removeMd from 'remove-markdown'

const client = new MeiliSearch({
  host: import.meta.env.PUBLIC_MEILISEARCH_HOST,
  apiKey: import.meta.env.MEILISEARCH_MASTER_KEY
})

export const saveSearchIndex = (data: CollectionEntry<'posts'>[]) => {
  const docs = data.map(({ body, data, slug }) => {
    return {
      id: slug,
      title: data.title,
      description: data.description,
      tags: data.tags,
      content: removeMd(body).replace(/\n/g, '')
    }
  })

  client
    .index('posts')
    .addDocuments(docs)
    .then(res => console.log(res))
}
