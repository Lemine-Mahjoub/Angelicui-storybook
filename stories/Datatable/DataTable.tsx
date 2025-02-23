import React, { useState, createContext, useContext} from "react";
interface DataTableContextType {
  data: Object[];
  setData: (data: Object[]) => void;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  actualPage: number;
  setActualPage: (actualPage: number) => void;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

const DataTableContext = createContext<DataTableContextType | undefined>(undefined);

export function DataTable({ children, data, setData }: { children: React.ReactNode, data: Object[], setData: (data: Object[]) => void }) {
    console.count('DataTable')
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [actualPage, setActualPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);


    return (
        <DataTableContext.Provider value={{ data, setData, pageNumber, setPageNumber, actualPage, setActualPage, totalPages, setTotalPages, pageSize, setPageSize }}>
            <div className="datatable">{children}</div>
        </DataTableContext.Provider>
    );
}


export function useDataTable() {
    const context = useContext(DataTableContext);
    if (!context) {
        throw new Error("useDataTable must be used within a DataTableSystem");
    }
    return context;
}