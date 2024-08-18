import { useState } from "react"

export const Form = () =>{
    const [tarefas, setTarefas] = useState('')
    console.log(tarefas);
    
    return(
        <>
            <form className="p-8 items-center gap-3 grid grid-cols-1">
                <label className="text-7xl text-center text-white" htmlFor="tarefas">Tarefas</label>
                <input 
                className="rounded-md" 
                id="tarefas" 
                name="tarefas" 
                type="text"
                onChange={(e) => setTarefas(e.target.value)} />
            </form>
        </>
    )
}