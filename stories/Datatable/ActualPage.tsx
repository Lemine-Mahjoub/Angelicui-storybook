import React from "react";
import { useDataTable } from "./DataTable";


export function ActualPage() {
  const { actualPage, totalPages } = useDataTable();
  return <div>{actualPage} of {totalPages}</div>;
}
