import { useState } from "react"
import './contador.css'

export const Contador = () =>{
    const [contador, setContador] = useState(0)// primeiro passa o estado depois a funçao que muda o estado

    return(
        <>
        <header>
            <h1>Aprendendo o Hook UseState</h1>
        </header>
            <main>
                <h2>Nessa tarefa eu mudo o estado do numero abaixo</h2>
                <h2>{contador}</h2>
                <button onClick={() => {setContador(contador + 1)}}>Aumentar</button>
                <button onClick={() => {setContador(contador - 1)}}>Diminuir</button>
            </main>

        </>
    )
} 