import { Footer } from "./components/Footer/Footer"
import { Form } from "./components/Form/form"
import { Headear } from "./components/Headear/headear"

function App() {
  return (
    <>
     <Headear />
     <main className="h-[55vh] bg-blue-700">
      <Form />
     </main>
     <Footer />
    </>
  )
}

export default App
