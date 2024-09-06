import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Formulario } from "./pages/Formulario";
import { Usuarios } from "./pages/Usuarios";
import { FormProvider } from "./context/FormContext";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
        <header>
          <Nav />
        </header>
        <main className="px-12 py-8  h-screen">
          <Routes>
            <Route path="/remedios" element={<Formulario />}></Route>
            <Route path="/usuarios" element={<Usuarios />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
        <Footer />
        </FormProvider>
      </BrowserRouter>
    </>
  );
}
