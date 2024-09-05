import { useContext} from "react";
import { DivForm } from "./DivForm";
import { LabelForm } from "./LabelForm";
import { FormContext } from "../context/FormContext";
import { Tabela } from "./Tabela";

export const Formulario = () => {
  const {setQuantidade, setRemedio, salvarRemedio} = useContext(FormContext)
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-3">
        Banco de Remedios👨🏻‍⚕️🏣
      </h1>
      <form className="grid grid-cols-2 gap-3  items-center">
        <DivForm>
          <LabelForm htmlFor="remedios">Remedio</LabelForm>
          <input
            className="px-3 hover:border-blue-500 border-2 rounded-md col-span-2"
            type="text"
            name="remedios"
            id="remedios"
            placeholder="digite seu remedio"
            onChange={(e) => setRemedio(e.target.value)}
          />
        </DivForm>
        <DivForm>
          <LabelForm htmlFor="quantidade">Quantidade</LabelForm>
          <input
            className="px-3 hover:border-blue-500 border-2 rounded-md col-span-2"
            type="number"
            name="quantidade"
            id="quantidade"
            placeholder="Qtd"
            onChange={(e) => setQuantidade(parseInt(e.target.value))}
          />
        </DivForm>
        <button
          className="bg-blue-500 text-white p-5 rounded-md col-span-2 w-[500px] m-auto text-xl font-bold"
          onClick={salvarRemedio}
          type="button"
        >
          Registrar
        </button>
      </form>
      <Tabela />
    </>
  );
};
