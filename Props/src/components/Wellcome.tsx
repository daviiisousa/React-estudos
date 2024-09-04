import { useState } from "react";
import { Container } from "./Container";

type WellcomeProps = {

  onClick: (nome: string) => void;
};

export const Wellcome = ({ onClick }: WellcomeProps) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(Number)
  return (
    <>
      <Container>
        <h1 className="text-3xl font-bold mb-3">Props</h1>
        <h1>seja bem vindo {nome}</h1>
        <p>{`vc tem ${idade} anos`}</p>
        <form className="flex gap-5">
          <label htmlFor="nome">Nome: </label>
          <input
            placeholder="digite seu nome"
            name="nome"
            id="nome"
            type="text"
            onChange={(e) => setNome(e.target.value)}
          />
        </form>
        <form className="flex gap-5">
          <label htmlFor="nome">Idade: </label>
          <input
            placeholder="digite sua idade"
            name="nome"
            id="nome"
            type="number"
            onChange={(e) => setIdade(parseInt(e.target.value))}
          />
        </form>
        <div className="flex gap-5">
          <button
            onClick={() => onClick(nome)}
            className="bg-green-500 px-4 py-2 mt-3 rounded-md hover:bg-blue-600 hover:text-lg transition-all"
          >
            Bem Vindo
          </button>
        </div>
      </Container>
    </>
  );
};
