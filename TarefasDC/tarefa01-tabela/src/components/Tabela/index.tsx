type childrenProps ={
    children: React.ReactNode
}

export const Tabela = ({children}: childrenProps) =>{
    return(
        <>
            <div>
            <table className="table table-striped">{children}</table>
            </div>
        </>
    )
}