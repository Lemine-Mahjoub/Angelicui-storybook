import React, { ReactNode} from 'react'
import { useTabs } from './TabsProvider'

export function TabTitle({ children }: { children: string[] }) {
    const { setTabs } = useTabs()

    setTabs(children)

    return (
        <div>
            {children.map((child, index) => (
                <div key={index}>{child}</div>
            ))}
        </div>
    )
}
