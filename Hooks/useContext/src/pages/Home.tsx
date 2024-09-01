import { useContext } from "react"
import { TemaContexto } from "../context/TemaContext"

export const Home = () => {
    const {mudarTema, tema} = useContext(TemaContexto)
    return(
        <>
            <div>
                <h2>ola vc esta na parte da <strong>home</strong> do meu site</h2>
                <p>o tema atual é {tema}</p>
                <button onClick={mudarTema}>mudar tema</button>
            </div>
        </>
    )
}