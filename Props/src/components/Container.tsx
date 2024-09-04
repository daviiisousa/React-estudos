import React from "react"
type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => {
    return(
        <>
            <div className="px-6 py-4">
                {children}
            </div>
        </>
    )
}