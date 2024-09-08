import { useContext } from "react"
import { FormContext } from "../context/FormContext"

export const Carrinho = () => {
    const {remediosCarrinho} = useContext(FormContext)
    return(
        <>
        <div className=" my-3">
            <h2 className="text-5xl text-red-500 font-bold">Meu Carrinho</h2>
            <p className="text-2xl">{`${remediosCarrinho.length} produtos no carrinho`}</p>
        </div>
            {remediosCarrinho.map((remedio) => (
                <div className="border-2 border-slate-400 rounded-md my-5 p-5  "
                key={remedio.id}>
                    <div className="grid grid-cols-2 gap-3">
                        <h2 className="col-span-2 text-red-500 font-semibold text-3xl" >Nome</h2>
                        <p className="text-xl ">{remedio.remedio}</p>
                        <h2 className="col-span-2 text-red-500 font-semibold text-3xl" >Descrição</h2>
                        <p className="text-xl ">{remedio.descricao} </p>
                        <h2 className="col-span-2 text-red-500 font-semibold text-3xl" >Quantidade</h2>
                        <p className="text-xl ">{remedio.quantidade} </p>
                    </div>
                </div>
            ))}
        </>
    )
}