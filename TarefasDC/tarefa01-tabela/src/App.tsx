
import { Container } from "./components/Conteiner"
import { Menu } from "./components/Menu"
import { Home } from "./pages/Home";
import { Users } from "./pages/Remedios"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
      <Container>

        <header>
          <Menu />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
        </main> 
        
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App