import React, { useState, createContext, useContext } from 'react'
import { Actual } from './Actual'
import { NavigationPage } from './NavigationPage'
import { PrecedentBtn } from './PrecedentBtn'
import { NextBtn } from './NextBtn'
import { ActionButton } from './ActionButton'

interface PaginatorContextType {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  setTotalPages: (total: number) => void;
}

const PaginatorContext = createContext<PaginatorContextType | undefined>(undefined);

export function Paginator({children}: {children: React.ReactNode}) {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const value = {
        page,
        totalPages,
        setPage,
        setTotalPages
    };

    return (
        <PaginatorContext.Provider value={value}>
            <PaginatorContainer>
                {children}
            </PaginatorContainer>
        </PaginatorContext.Provider>
    )
}

export function usePaginator() {
    const context = useContext(PaginatorContext);
    if (context === undefined) {
        throw new Error('usePaginator must be used within a Paginator');
    }
    return context;
}

function PaginatorContainer({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
        </div>
    )
}

Paginator.Actual = Actual
Paginator.NavigationPage = NavigationPage
Paginator.PrecedentBtn = PrecedentBtn
Paginator.NextBtn = NextBtn
Paginator.ActionButton = ActionButton

