import './formulario.css'

export const Formulario = () =>{
    return(
        <>
            <h2>Digite suas atividades</h2>
            <label htmlFor="tarefas">Tasks 📑</label>
            <form onSubmit={(event) => event.preventDefault() }>
                <input type="text" id='tarefas' placeholder="Digite sua tarefa" />
                <button>Enviar</button>
            </form>
        </>
    )
}