type childrenProps ={
    children: React.ReactNode
}

export const TrParaBotao = ({children}:childrenProps) =>{
    return(
        <>
            <td>{children}</td>
        </>
    )
}