import React from "react";
import { useDataTable } from "./DataTable";
export function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center gap-4 bg-red-200">
      {children}
    </div>
  )
}
export function NextButton() {
    const { actualPage, setActualPage, totalPages } = useDataTable();
    if (actualPage === totalPages) return <button disabled>Next</button>;
  return (
      <button onClick={() => setActualPage(actualPage + 1)}>Next</button>
  )
}

export function PreviousButton() {
    const { actualPage, setActualPage } = useDataTable();
    if (actualPage === 1) return <button disabled>Previous</button>;

  return (
      <button onClick={() => setActualPage(actualPage - 1)}>Previous</button>
  )
}