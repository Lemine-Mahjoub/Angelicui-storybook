import React from 'react'
import { usePaginator } from './Paginator'

export function NextBtn() {
  const { page, setPage, totalPages } = usePaginator();

  if (page >= totalPages) {
    return null;
  }

  return <button onClick={() => setPage(page + 1)}>Next</button>
}



