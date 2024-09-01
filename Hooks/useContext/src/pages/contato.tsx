import { useContext } from "react"
import { TemaContexto } from "../context/TemaContext"

export const Contato = () => {
    const {tema, mudarTema} = useContext(TemaContexto)
    return(
        <>
            <div>
                <h2>ola vc esta na parte dos <strong>contatos</strong> do meu site</h2>
                <p>o tema atual é {tema}</p>
                <button onClick={mudarTema}>mudar tema</button>
            </div>
        </>
    )
}