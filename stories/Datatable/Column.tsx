import React from "react";

export function Column({ children }: { children: React.ReactNode }) {
  return <td>{children}</td>;
};

export function HColumn({ children }: { children: React.ReactNode }) {
    return <th>{children}</th>;
}
