import React, { ReactNode } from "react";

export function Table({ children }: { children: ReactNode[] | ReactNode }) {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      {children}
    </table>
  )
}
