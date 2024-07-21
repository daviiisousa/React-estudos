import React from "react"
import './containermain.css'
export const ContainerMain = ({ children }: { children: React.ReactNode }) =>{
    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}