import { FormEvent, useEffect, useState } from 'react'
import './formulario.css'

interface Tarefas{
    title: string;
    done: boolean;
    id: number;
}

export const Formulario = () =>{
    const [tarefa, setTarefa] = useState(' ')
    const [tarefas, setTarefas] = useState([] as Tarefas[]) 

    function QuandoFormRecarregar(event: FormEvent){
        event.preventDefault()

        const novaTarefa = [
            ...tarefas,
            { title: tarefa, id: new Date().getTime(), done: false}
        ]

        setTarefas(novaTarefa)

        localStorage.setItem('tasks', JSON.stringify(novaTarefa))
    }
    
    useEffect(() =>{
        const tarefaNoLocalStorage = localStorage.getItem('tasks')

        if(tarefaNoLocalStorage){
            setTarefas(JSON.parse(tarefaNoLocalStorage))
        }
    }, [])


    return(
        <>
            <h2>Digite suas atividades</h2>
            <label htmlFor="tarefas">Tasks 📑</label>
            <form onSubmit={QuandoFormRecarregar}>
                <input 
                type="text" 
                id='tarefas'
                placeholder="Digite sua tarefa"
                onChange={(e) => {setTarefa(e.target.value)}}
                value={tarefa}
                />
                <button>Enviar</button>
            </form>
            <ul>
                {tarefas.map(items =>{
                    return(
                    <li key={items.id}>
                        <input type="checkbox" name="inputTarefa" id={`TaskId ${items.id}`} />
                        <label htmlFor={`TaskId ${items.id}`}>{items.title}</label>
                    </li>
                    )
                })}
             </ul>
        </>
    )
}