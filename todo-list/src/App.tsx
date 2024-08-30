import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./components/Form/form";
import { Headear } from "./components/Headear/headear";
import { Home } from "./pages/Home";

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
      </BrowserRouter>
    </>
  );
}

export default App;
