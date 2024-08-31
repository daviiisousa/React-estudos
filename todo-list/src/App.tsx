import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./components/Form/form";
import { Headear } from "./components/Headear/headear";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headear />
        <main>
          <Routes>
            <Route path="/" element={<Form />}></Route>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
