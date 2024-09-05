import { useContext } from "react"
import { FormContext } from "../context/FormContext"

export const Tabela = () => {
    const {remedios} = useContext(FormContext)
    return(
        <section className="my-3">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="py-2 px-4 text-left">Remedios</th>
                  <th className="py-2 px-4 text-left">Quantidade</th>
                  <th className="py-2 px-4 text-left">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {remedios.map((remedio) => (
                  <tr key={remedio.id} className="border-b">
                    <td className="py-2 px-4">{remedio.remedio}</td>
                    <td className="py-2 px-4">{remedio.quantidade}</td>
                    <td className="py-2 px-4">{remedio.descricao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </section>
    )
}