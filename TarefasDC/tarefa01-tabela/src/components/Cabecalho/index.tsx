type childrenProps ={
    children: React.ReactNode
}

export const Cabecalho = ({children}: childrenProps) =>{
    return(
        <>
            <header>
                {children}
            </header>
        </>
    )
}