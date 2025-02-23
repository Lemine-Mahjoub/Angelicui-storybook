import React from "react";

export function Paginator({ children }: { children: React.ReactNode }) {
  return (
  <div className="flex justify-between items-center w-full bg-red-200">
    {children}
  </div>
  );
}
