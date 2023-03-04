import React from 'react'
import { useInstantSearch } from 'react-instantsearch-hooks-web'

export const NoResultsBoundary = ({
  children,
  fallback
}: {
  children: React.ReactNode
  fallback: React.ReactNode
}) => {
  const { results } = useInstantSearch()

  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    )
  }

  return <>{children}</>
}

export const NoResults = () => {
  const { indexUiState } = useInstantSearch()

  return (
    <div className="ais-Hits_Empty mt-4">
      <p>{indexUiState.query}の検索結果が見つかりませんでした</p>
    </div>
  )
}
