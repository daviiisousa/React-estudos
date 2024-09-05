import { useState } from "react";
import { api } from "../utils/api";

type Remedios ={
    remedio: string,
    quantidade: number
}

export const Formulario = () => {
    const [remedio, setRemdeio] = useState('')

    const [quantidade, setQuantidade] = useState(Number)

    const [remedios, setRemedios] =useState<Remedios[]>([])

    const salvarRemedio = async () => {
        const payload: Remedios = {
            quantidade: quantidade,
            remedio: remedio
        }
        
        await api.post("/remedios", payload)
    }
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-3">
        Banco de Remedios👨🏻‍⚕️🏣
      </h1>
      <form className="grid grid-cols-2 gap-3">
        <div className="grid grid-cols-2 gap-3">
          <label className="col-span-2 text-3xl font-bold" htmlFor="remedios">
            Remedio
          </label>
          <input
            className="px-3 hover:border-blue-500 border-2 rounded-md col-span-2"
            type="text"
            name="remedios"
            id="remedios"
            placeholder="digite seu remedio"
            onChange={(e) => setRemdeio(e.target.value) }
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
        <label className="col-span-2 text-3xl font-bold" htmlFor="quantidade">
            Quantidade
          </label>
          <input
            className="px-3 hover:border-blue-500 border-2 rounded-md col-span-2"
            type="number"
            name="quantidade"
            id="quantidade"
            placeholder="Qtd"
            onChange={(e) => setQuantidade(parseInt(e.target.value)) }
          />
        </div>
        <button onClick={() => salvarRemedio}>Enviar</button>
      </form>
    </>
  );
};
