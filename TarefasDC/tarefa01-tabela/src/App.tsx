import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Formulario } from "./components/Formulario";
import { Usuarios } from "./components/Usuarios";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <main className="px-12 py-5  h-screen">
          <Routes>
            <Route path="/formulario" element={<Formulario />}></Route>
            <Route path="/usuarios" element={<Usuarios />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
