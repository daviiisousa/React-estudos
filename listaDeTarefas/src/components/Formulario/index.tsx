import { FormEvent, useEffect, useState } from 'react'
import './formulario.css'
import { Tarefas } from '../Tarefas';
import Swal from 'sweetalert2';


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

    const removerTarefa = (idDatarefa: number) => {
        const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== idDatarefa);
        setTarefas(tarefasFiltradas);

        localStorage.setItem('tasks', JSON.stringify(tarefasFiltradas))
    };

    const tarefaFeita = (done: boolean) => {
        const tarefasQueForamFeitas = tarefas.map(items => items.done !== done)

        if(tarefasQueForamFeitas){
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Tarefa concluida"
              });
        }

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
                        <input onClick={() => {tarefaFeita(items.done)}} type="checkbox" name="inputTarefa" id={`TaskId ${items.id}`} />
                        <label htmlFor={`TaskId ${items.id}`}>{items.title}</label>
                        <button type='button' onClick={() => {removerTarefa(items.id)}}>Remover</button>
                    </li>
                    )
                })}
             </ul>
        </>
    )
}