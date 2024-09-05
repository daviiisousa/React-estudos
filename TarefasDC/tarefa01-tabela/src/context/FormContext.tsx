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
  id?: number;
};

type FormContextProps = {
  remedio: string;
  quantidade: number;
  salvarRemedio: () => Promise<void>;
  carregarRemedio: () => Promise<void>;
  remedios: Remedios[];
  setRemedio: Dispatch<SetStateAction<string>>;
  setQuantidade: Dispatch<SetStateAction<number>>;
};

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);

export const FormProvider = ({ children }: Children) => {
  const [remedio, setRemedio] = useState("");

  const [quantidade, setQuantidade] = useState(Number);

  const [remedios, setRemedios] = useState<Remedios[]>([]);

  const salvarRemedio = async () => {
    const payload: Remedios = {
      quantidade: quantidade,
      remedio: remedio,
    };

    if (remedio === "" || quantidade <= 0) {
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
  };

  return (
    <FormContext.Provider value={valor}> {children} </FormContext.Provider>
  );
};
