import { FormEvent, useRef } from 'react'
import './App.css'

function App() {
const inputNameRef = useRef<HTMLInputElement>(null)
const inputEmailRef = useRef<HTMLInputElement>(null)


function handleCLick(e: FormEvent){
  e.preventDefault()
  console.log(inputNameRef.current?.value, inputEmailRef.current?.value )
}

  return (
    <>
    <h1>UseRef</h1>
      <form action="" onSubmit={(e) => handleCLick(e)}>
        <input type="text"  placeholder='seu nome' required ref={inputNameRef} />
        <br />
        <input type="email" placeholder='seu email' required ref={inputEmailRef} />
        <br />

        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default App

// useRef: Para manipular diretamente elementos DOM (foco, seleção de texto, etc.) ou armazenar valores que não precisam provocar re-renderizações.