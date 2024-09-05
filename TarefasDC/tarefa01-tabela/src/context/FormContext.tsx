import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "../utils/api";
import Swal from "sweetalert2";

type Children = {
  children: React.ReactNode;
};

type Remedios = {
  remedio: string;
  quantidade: number;
  descricao: string;
  id?: number;
};

type FormContextProps = {
  remedio: string;
  quantidade: number;
  salvarRemedio: () => Promise<void>;
  carregarRemedio: () => Promise<void>;
  apagarRemedio: (remedio: Remedios) => Promise<void>;
  remedios: Remedios[];
  setRemedio: Dispatch<SetStateAction<string>>;
  setQuantidade: Dispatch<SetStateAction<number>>;
  setDescricao: Dispatch<SetStateAction<string>>;
  setRemedios: Dispatch<SetStateAction<Remedios[]>>
};

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);

export const FormProvider = ({ children }: Children) => {
  const [remedio, setRemedio] = useState("");

  const [quantidade, setQuantidade] = useState(Number);

  const [descricao, setDescricao] = useState("");

  const [remedios, setRemedios] = useState<Remedios[]>([]);

  const salvarRemedio = async () => {
    const payload: Remedios = {
      quantidade: quantidade,
      remedio: remedio,
      descricao: descricao,
    };

    if (remedio === "" || quantidade <= 0 || descricao === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha o formulario",
      });
      return;
    }

    await api.post("/remedios", payload);
    window.location.reload();
  };

  const carregarRemedio = async () => {
    const responseRemedio = await api.get("/remedios");
    const dataRemedio = responseRemedio.data;

    setRemedios(dataRemedio);
  };

  const apagarRemedio = async (remedio: Remedios) => {
    await api.delete(`/remedios/${remedio.id}`);
    const remedioDeletado = remedios.filter((r) => r.id !== remedio.id);

    setRemedios(remedioDeletado);
  };

  useEffect(() => {
    carregarRemedio();
  }, []);

  const valor: FormContextProps = {
    remedio,
    quantidade,
    carregarRemedio,
    salvarRemedio,
    remedios,
    setQuantidade,
    setRemedio,
    setDescricao,
    setRemedios,
    apagarRemedio
  };

  return (
    <FormContext.Provider value={valor}> {children} </FormContext.Provider>
  );
};
