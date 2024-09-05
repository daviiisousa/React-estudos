type Children = {
    children: React.ReactNode
}

export const DivForm = ({children}: Children) => {
    return <div className="grid grid-cols-2 gap-3">{children}</div>
}