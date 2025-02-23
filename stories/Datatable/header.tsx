import React from "react";

export function Header({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100 text-left">{children}</thead>;
}
