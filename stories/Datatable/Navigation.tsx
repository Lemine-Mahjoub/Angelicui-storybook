import React from "react";
import { useDataTable } from "./DataTable";
export function Navigation() {
  const { totalPages, actualPage, setActualPage } = useDataTable();
  return (
    <div className="flex gap-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => setActualPage(index + 1)}
          className="px-3 py-1 mx-1 rounded bg-white hover:bg-gray-100"
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

