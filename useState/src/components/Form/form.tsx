import { useState } from "react"

export const Form = () =>{

    const[name, setName] = useState('')
    console.log(name);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("name:", name);
        // Aqui você pode adicionar lógica para enviar o nome para um servidor, etc.
    };


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                id="name" 
                name="name"
                />

                <button type="submit">Enviar</button>
            </form>

        </>
    )
}