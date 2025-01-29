import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { ColumnHeight } from '../constant'
import { Header } from './Header'
import { Body } from './Body'
import { Row } from './Row'
import { Footer } from './Footer'
import { Column } from './Column'



interface DataTableContextType {
    columns: any[]
    setColumns: (columns: any[]) => void
    page: number
    setPage: (page: number) => void
    columnsPerPage: number
    setColumnsPerPage: (columnsPerPage: number) => void
    actualPage: number
    setActualPage: (actualPage: number) => void
}

const DataTableContext = createContext<DataTableContextType | undefined>(undefined)

export function useDataTable() {
  const context = useContext(DataTableContext)
  if (!context) {
    throw new Error('useDataTable must be used within a DataTableProvider')
  }
  return context
}

export function DataTable({ children }: { children: React.ReactNode }) {

  const [columns, setColumns] = useState<any[]>([])
  const Parent = useRef<HTMLTableElement>(null)
  const [height, setHeight] = useState(0)
  const [columnsPerPage, setColumnsPerPage] = useState(0)
  const [page, setPage] = useState(0)
  const [actualPage, setActualPage] = useState(0)

  useEffect(() => {
    if (Parent.current) {
      const height = Parent.current.clientHeight
      setHeight(height)
    }
  }, [Parent])

  useEffect(() => {
    if (height) {
      setColumnsPerPage(Math.floor(height / ColumnHeight))
    }
  }, [height])

  useEffect(() => {
    setPage(Math.floor(page / columnsPerPage))
  }, [page, columnsPerPage])

  return (
    <DataTableContext.Provider value={{ columns, setColumns, page, setPage, columnsPerPage, setColumnsPerPage, actualPage, setActualPage }}>
      <table className="w-full h-full bg-slate-400" ref={Parent}>
        {children}
      </table>
    </DataTableContext.Provider>
  )
}

DataTable.Header = Header
DataTable.Body = Body
DataTable.Row = Row
DataTable.Column = Column
DataTable.Footer = Footer