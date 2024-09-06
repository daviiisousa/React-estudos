import { useContext } from "react";
import { DivForm } from ".././components/FormComponents/DivForm";
import { LabelForm } from ".././components/FormComponents/LabelForm";
import { FormContext } from "../context/FormContext";
import { Tabela } from "../components/Tabela";
import { InputForm } from ".././components/FormComponents/InputForm";

export const Formulario = () => {
  const { setQuantidade, setRemedio, salvarRemedio, setDescricao } = useContext(FormContext);
  return (
    <>
      <h1 className="text-4xl font-bold text-red-600 text-center my-5">
        Banco de Remedios👨🏻‍⚕️🏣
      </h1>
      <form className="grid grid-cols-3 gap-5  items-center m-5">
        <DivForm>
          <LabelForm htmlFor="remedios">Remedio</LabelForm>
          <InputForm
            id="remedios"
            name="remedios"
            onChange={(e) => setRemedio(e.target.value)}
            placeholder="digite o nome do remedio"
            type="text"
          />
        </DivForm>
        <DivForm>
          <LabelForm htmlFor="descricao">Descrição</LabelForm>
          <InputForm id="descricao" name="descricao" onChange={(e) => setDescricao(e.target.value)} placeholder="Descreva" type="text"/>
        </DivForm>
        <DivForm>
          <LabelForm htmlFor="quantidade">Quantidade</LabelForm>
          <InputForm
            id="quantidade"
            name="quantidade"
            onChange={(e) => setQuantidade(parseInt(e.target.value))}
            placeholder="Qtd"
            type="number"
          />
        </DivForm>
        <button
          className="bg-blue-500 text-white p-5 rounded-md col-span-3 w-[500px] m-auto text-xl font-bold"
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
