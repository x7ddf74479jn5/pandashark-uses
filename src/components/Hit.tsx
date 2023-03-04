import React from 'react'
import { Highlight } from 'react-instantsearch-hooks-web'
import type { Hit as HitType } from 'instantsearch.js'
import type { CollectionEntry } from 'astro:content'

export const Hit = ({
  hit
}: {
  hit: HitType<CollectionEntry<'posts'>['data']>
}) => {
  return (
    <div>
      <Highlight attribute="title" hit={hit} />
      <Highlight attribute="description" hit={hit} />
    </div>
  )
}
