import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Formulario } from "./components/Formulario";
import { Usuarios } from "./components/Usuarios";
import { FormProvider } from "./context/FormContext";
import { Home } from "./components/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
        <header>
          <Nav />
        </header>
        <main className="px-12 py-5  h-screen">
          <Routes>
            <Route path="/remedios" element={<Formulario />}></Route>
            <Route path="/usuarios" element={<Usuarios />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
        </FormProvider>
      </BrowserRouter>
    </>
  );
}
