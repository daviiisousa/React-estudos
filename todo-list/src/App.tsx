import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./components/Form/form";
import { Headear } from "./components/Headear/headear";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer/Footer";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <Headear />
          <main>
            <Routes>
              <Route path="/" element={<Form />}></Route>
              <Route path="/Home" element={<Home />}></Route>
            </Routes>
          </main>
          <Footer />
        </FormProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
