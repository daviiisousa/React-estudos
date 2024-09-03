import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "../utils/api";
import Swal from "sweetalert2";

type FormContextProps = {
  tarefas: tarefas[];
  carregarTarefas: () => Promise<void>;
  salvarTarefa: () => Promise<void>;
  apagarTarefa: (tarefa: tarefas) => Promise<void>;
  setTarefa: Dispatch<SetStateAction<string>>;
  setDescricao: Dispatch<SetStateAction<string>>;
  setData: Dispatch<SetStateAction<number>>;
};

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);

export const FormProvider = ({ children }: children) => {
  const [tarefa, setTarefa] = useState("");

  const [descricao, setDescricao] = useState("");

  const [data, setData] = useState(Number)
  console.log(data)

  const [tarefas, setTarefas] = useState<tarefas[]>([]);

  const salvarTarefa = async () => {
    const payload: tarefas = {
      tarefa: tarefa,
      descricao: descricao,
      data: data
    };

    if (tarefa == "" || descricao == "" || data <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Porfavor digite uma tarefa valida!",
      });
      return;
    }

    await api.post("/tarefas", payload);

    window.location.reload();
  };

  const carregarTarefas = async () => {
    const responseTarefas = await api.get("/tarefas");
    const dataTarefa = responseTarefas.data;

    setTarefas(dataTarefa);
  };

  const apagarTarefa = async (tarefa: tarefas) => {
    await api.delete(`/tarefas/${tarefa.id}`);
    const TarefaDeletada = tarefas.filter((r) => r.id !== tarefa.id);

    setTarefas(TarefaDeletada);
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const valor: FormContextProps = {
    tarefas,
    apagarTarefa,
    carregarTarefas,
    salvarTarefa,
    setTarefa,
    setDescricao,
    setData
  };

  return <FormContext.Provider value={valor}>{children}</FormContext.Provider>;
};
