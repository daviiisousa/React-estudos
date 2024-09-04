import { Wellcome } from "./components/Wellcome"

function App() {

  const bemVindo = () => {
    alert(`ola `);
  };

  return (
    <>
     <Wellcome onClick={bemVindo} />
    </>
  )
}

export default App
