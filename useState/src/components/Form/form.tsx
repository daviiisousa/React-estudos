import { useState } from "react"
import './form.module.scss'

export const Form = () =>{

    const[name, setName] = useState('')//altera o estado dos components
    
    
    const handleSubmit = (event:any) => { 
        event.preventDefault();// impedeque minha pagina recarregue 
        console.log(name);
        
    };
    

    return(
        <>
        <header>
            <h1>Aprendendo o Hook UseState</h1>
        </header>
            <main>
                <section>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nome:</label>
                        <input
                        onChange={(e) => setName(e.target.value)}//pega cada letra digitada
                        type="text"
                        id="name"
                        name="name"
                        />
                        <button type="submit">Enviar</button>
                    </form>
                    <p>{name}</p>
                </section>
            </main>

        </>
    )
}