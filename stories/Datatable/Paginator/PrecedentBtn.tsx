import React from 'react'
import { usePaginator } from './Paginator'

export function PrecedentBtn() {
  const { page, setPage } = usePaginator();

  if (page <= 1) {
    return null;
  }

  return <button onClick={() => setPage(page - 1)}>Previous</button>
}



