
import { Container } from "./components/Conteiner"
import { Conteudo } from "./components/Conteudo"
import { Menu } from "./components/Menu"
import { Users } from "./pages/Users"


function App() {

  return (
    <>
      <Container>

        <header>
          <Menu />
        </header>
        <main>
        <Users />
        </main> 
        
      </Container>
    </>
  )
}

export default App