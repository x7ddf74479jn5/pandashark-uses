import React from 'react'
import type { Hit } from 'instantsearch.js'
import {
  Hits,
  Pagination,
  Highlight,
  useInstantSearch
} from 'react-instantsearch-hooks-web'
import type { SearchDocument } from '../lib/meilisearch'

type Props = {
  hit: Hit<SearchDocument>
}

function HitComponent({ hit }: Props) {
  return (
    <a href={`/posts/${hit.id}`} className="flex w-full justify-start p-5">
      <Highlight
        attribute="title"
        hit={hit}
        classNames={{
          root: 'font-semibold',
          highlighted: 'bg-transparent text-orange-500'
        }}
      />
    </a>
  )
}

export const SearchResult = () => {
  const { uiState } = useInstantSearch()

  if (!uiState.posts.query) return null

  return (
    <>
      <p className="mt-5 text-sm font-semibold tracking-wider">記事一覧</p>
      <Hits
        hitComponent={HitComponent}
        classNames={{
          list: 'py-1',
          item: 'rounded-md shadow-none block my-2 p-0 bg-zinc-50 dark:bg-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-500'
        }}
      />
      <Pagination
        classNames={{
          root: 'flex justify-center',
          list: 'flex justify-center',
          item: 'bg-zinc-50 text-zinc-900 dark:text-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 inline-block border border-zinc-400 dark:border-zinc-700',
          selectedItem: 'dark:bg-zinc-700',
          disabledItem: 'cursor-none opacity-80',
          link: 'rounded cursor-pointer inline-flex font-normal text-sm h-8 justify-center px-4 place-items-center select-none'
        }}
      />
    </>
  )
}
