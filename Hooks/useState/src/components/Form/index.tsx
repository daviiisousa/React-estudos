import { useState } from "react"
import './style.css'

export const Form = () => {
    const [form, setForm] = useState(' ')
    return(
        <>
            <h1>Formulario</h1>
            <h2>Nesse formulario tudo que vc digitar vai ser mostrado </h2>
            <form>
                <label htmlFor="form">Digite algo</label>
                <input 
                type="text" 
                id="form" 
                name="form" 
                onChange={(evento) => {setForm(evento.target.value)}}
                value={form}
                />
                <p>vc digitou {form}</p>
            </form>
        </>
    )
}