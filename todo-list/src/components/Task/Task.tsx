import { FormEvent, useEffect, useState } from 'react'
import styles from './Task.module.scss'

interface Task{
    title: string;
    done: boolean;
    id: number;
}

export const Task = () =>{

    const [TaskTilte, setTaskTitle] = useState('')
    const [Task, setTask] = useState([] as Task[])

    function NaoRecarregueOForm(event: FormEvent){
        event.preventDefault()

        if(TaskTilte.length < 3){
            alert('porfavor digite uma tarefa valida')
            return
        }

        const newTask = [
            ...Task,
            { title: TaskTilte, id: new Date().getTime(), done: false}
        ]

        setTask(newTask)

        localStorage.setItem('tasks', JSON.stringify(newTask))

        setTaskTitle('')
    }
  
    useEffect(() =>{
        const taskOnLocalStorage = localStorage.getItem('tasks')

        if(taskOnLocalStorage){
            setTask(JSON.parse(taskOnLocalStorage))
        }
    }, [])

    return(
        <>
        <section className={styles.container}>
             <form onSubmit={NaoRecarregueOForm}>
                <div>
                    <label htmlFor="inputTarefa">Adicionar tarefa</label>
                    <input
                    value={TaskTilte}
                    onChange={(event) => setTaskTitle(event.target.value)} 
                    type="texi"  
                    id='inputTarefa' 
                    placeholder='digite sua tarefa' />
                </div>

                <button type='submit'>Adicionar tarefa</button>
             </form>

             <ul>

                {Task.map(task =>{
                    return(
                    <li key={task.id}>
                        <input type="checkbox" name="inputTarefa" id={`TaskId ${task.id}`} />
                        <label htmlFor={`TaskId ${task.id}`}>{task.title}</label>
                    </li>
                    )
                })}
             </ul>
        </section>
        </>
    )
}