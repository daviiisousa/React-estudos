import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { ShoppingCart, Trash2 } from "lucide-react";

export const Tabela = () => {
  const { remedios, apagarRemedio, adicionatrAoCarrinho } = useContext(FormContext);
  return (
    <section className="my-3">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="py-2 px-4 text-left">Remedios</th>
              <th className="py-2 px-4 text-left">Quantidade</th>
              <th className="py-2 px-4 text-left">Descrição</th>
              <th className="py-2 px-4 text-left">Açoes</th>
            </tr>
          </thead>
          <tbody>
            {remedios.map((remedio) => (
              <tr key={remedio.id} className="border-2">
                <td className="py-2 px-4">{remedio.remedio}</td>
                <td className="py-2 px-4">{remedio.quantidade}</td>
                <td className="py-2 px-4">{remedio.descricao}</td>
                <td className="py-2 px-4 flex gap-3 items-center">
                  <button onClick={() => apagarRemedio(remedio)}>
                    <Trash2 />
                  </button>
                  <button onClick={() => adicionatrAoCarrinho(remedio) }>
                    <ShoppingCart />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
