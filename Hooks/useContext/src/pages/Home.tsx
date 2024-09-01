import { useContext } from "react"
import { TemaContexto } from "../context/TemaContext"

export const Home = () => {
    const {mudarTema, tema} = useContext(TemaContexto)
    return(
        <>
            <div className="px-6 py-3">
                <h2 className="text-4xl my-3">ola vc esta na parte da <strong>home</strong> do meu site</h2>
                <p className="text-xl">o tema atual é {tema}</p>
                <button className="bg-yellow-400 px-3 py-2 rounded-md text-yellow-900-900 my-3" onClick={mudarTema}>mudar tema</button>
            </div>
        </>
    )
}