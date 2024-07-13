import React from "react"

type childrenProps = {
    children: React.ReactNode
}

export const Container = ({children}: childrenProps) => {
    return(
        <div className="container-fluid p-0">{children}</div>
    ) 

}