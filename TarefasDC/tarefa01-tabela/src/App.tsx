import { Cabecalho } from "./components/Cabecalho"
import { Container } from "./components/Conteiner"
import { Conteudo } from "./components/Conteudo"
import { Menu } from "./components/Menu"
import { Users } from "./pages/Users"


function App() {

  return (
    <>
      <Container>

        <Cabecalho>
         <Menu />
        </Cabecalho>

        <Conteudo>
          <Users />
        </Conteudo>
        
      </Container>
    </>
  )
}

export default App