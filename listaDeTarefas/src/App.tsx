import { Cabecalho } from "./components/Cabecalho"
import { ContainerMain } from "./components/ContainerMain"
import { Formulario } from "./components/Formulario"
import './style.css'


function App() {
  return (
    <>
      <Cabecalho />
      <ContainerMain>
        <Formulario />
      </ContainerMain>
    </>
  )
}

export default App
