import React from "react"

type LabelProps = {
    htmlFor: string
    children: React.ReactNode
}

export const LabelForm = ({children, htmlFor}: LabelProps) => {
    return(
        <label className="col-span-2 text-3xl font-bold" htmlFor={htmlFor}>{children}</label>
    )
}