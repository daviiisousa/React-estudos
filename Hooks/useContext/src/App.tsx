import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Contato } from "./pages/contato"
import { TemaProvider } from "./context/TemaContext"


function App() {

  return (
    <>
    <BrowserRouter>
     <TemaProvider>
     <header>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </header>
     </TemaProvider>
    </BrowserRouter>
    </>
  )
}

export default App
