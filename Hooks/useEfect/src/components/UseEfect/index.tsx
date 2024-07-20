import { useEffect, useState } from "react"

export const UseEfect = () =>{
    const [alterado, setAlterado] = useState(false)

    useEffect(() =>{
        console.log('executou');
        
    }, [alterado])
    // o useEfefect e chamdo toda vez que a pagina e montada ou podemos passar uma dependencia, quando essa dependecia e passada o useEffect sera executado quando houver uma mudança na dependencia 

    return(
        <>
            <header>
                <h1>Nessa tarefa eu vou usa o useEfect para mostrar uma mensagem no terminal toda vez que o componente for montado</h1>
            </header>
            <main>
                <div>
                    <button onClick={() => {setAlterado(!alterado), alert('o useEffect foi chamado')}}>{alterado ? 'Nao alterado' : 'alterado'}</button>
                </div>
            </main>
        </>
    )
}