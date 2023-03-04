import type { CollectionEntry } from 'astro:content'
import { MeiliSearch } from 'meilisearch'
import removeMd from 'remove-markdown'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

const client = new MeiliSearch({
  host: import.meta.env.PUBLIC_MEILISEARCH_HOST,
  apiKey: import.meta.env.MEILISEARCH_MASTER_KEY
})

export type SearchDocument = Pick<
  CollectionEntry<'posts'>['data'],
  'title' | 'description' | 'tags'
> & { id: string; slug: CollectionEntry<'posts'>['slug'] }

export const saveSearchIndex = (data: CollectionEntry<'posts'>[]) => {
  const docs: SearchDocument[] = data.map(({ body, data, slug }) => {
    return {
      id: slug,
      slug,
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

export const searchClient = instantMeiliSearch(
  import.meta.env.PUBLIC_MEILISEARCH_HOST,
  import.meta.env.PUBLIC_MEILISEARCH_SEARCH_KEY,
  {
    placeholderSearch: false,
    primaryKey: 'id'
  }
)
