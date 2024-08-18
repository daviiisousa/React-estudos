import { useState } from "react"

type TarefasProps = {
    tarefa: string
}
export const Form = () =>{
    const [tarefas, setTarefas] = useState('')
    const [todasAsTarefas, setTodasAsTarefas] = useState<TarefasProps[]>([])

    const salvarTarefas = () =>{
       
    }
    
    return(
        <>
            <div>
                <form className=" bg-blue-700 p-8 items-center gap-3 grid grid-cols-1">
                    <label className="text-7xl text-center text-white" htmlFor="tarefas">Tarefas</label>
                    <input
                    className="rounded-md"
                    id="tarefas"
                    name="tarefas"
                    type="text"
                    onChange={(e) => setTarefas(e.target.value)} />
                </form>
                <section className=" bg-blue-700">
                    <div className="bg-blue-400 h-96 mx-14 "></div>
                </section>
            </div>
        </>
    )
}