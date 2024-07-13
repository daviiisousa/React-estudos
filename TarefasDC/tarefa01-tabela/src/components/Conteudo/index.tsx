import React from "react"
import { Container } from "../Conteiner"
type childrenProps ={
    children: React.ReactNode
}

export const Conteudo = ({children}: childrenProps) =>{
    return(
        <main className="mt-2 p-3">
            <Container>
                {children}
            </Container>
        </main>
    )
}