import { Container } from "./Container";

type WellcomeProps = {
  name: string;
  age: number;
};

export const Wellcome = ({ name, age }: WellcomeProps) => {
  const bemVindo = () => {
    alert("ola");
  };
  return (
    <>
      <Container>
        <h1 className="text-3xl font-bold mb-3">Props</h1>
        <h1>seja bem vindo {name}</h1>
        <p>vc tem {age} </p>
        <button
          onClick={bemVindo}
          className="bg-green-500 px-4 py-2 mt-3 rounded-md hover:bg-blue-600 hover:text-lg transition-all"
        >
          Bem Vindo
        </button>
      </Container>
    </>
  );
};
