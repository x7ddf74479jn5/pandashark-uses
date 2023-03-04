import React from 'react'
import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web'

import { searchClient } from '../lib/meilisearch'
import { NoResultsBoundary, NoResults } from './NoResults'
import { SearchResult } from './SearchResult'

export const Search = () => {
  return (
    <InstantSearch indexName="posts" searchClient={searchClient}>
      <div className="text-zinc-900 dark:text-zinc-300">
        <SearchBox
          searchAsYouType={false}
          placeholder="Search..."
          classNames={{
            form: 'flex text-sm h-10 relative w-full bg-zinc-50 text-zinc-900 dark:text-zinc-300 dark:bg-zinc-800 space-x-2',
            submit:
              'flex justify-center items-center w-12 px-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-400 rounded shadow fill-zinc-900 dark:fill-zinc-300',
            submitIcon: 'w-5 h-5 text-zinc-900 dark:text-zinc-300',
            reset:
              'flex items-center h-5 w-5 absolute justify-center right-[60px] pr-3 top-1/2 -translate-y-1/2 fill-zinc-900 dark:fill-zinc-300  bg-zinc-50 dark:bg-zinc-800',
            input:
              'flex-1 pl-5 bg-zinc-50 dark:bg-zinc-800 max-w-full pl appearance-none border rounded shadow-inner caret-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/5 focus:ring-offset-2 focus:ring-offset-gray-100 border border-zinc-400 dark:border-zinc-400'
          }}
        />
        <NoResultsBoundary fallback={<NoResults />}>
          <SearchResult />
        </NoResultsBoundary>
      </div>
    </InstantSearch>
  )
}
