import React, { useEffect } from "react";
import { useDataTable } from "./DataTable";

export function TableBody({ children }: { children: React.ReactNode[] }) {
  const { pageSize, actualPage, setTotalPages } = useDataTable();

  useEffect(() => {
    setTotalPages(Math.ceil(children.length / pageSize));
  }, [children, pageSize])

  return (<tbody>
    {children.slice((actualPage - 1) * pageSize, actualPage * pageSize)}
  </tbody>);
}
