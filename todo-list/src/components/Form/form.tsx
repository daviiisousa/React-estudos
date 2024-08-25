import { useEffect, useState } from "react";
import { api } from "../../utils/api";

export const Form = () => {
  const [tarefa, setTarefa] = useState("");

  const [descricao, setDescricao] = useState("");

  const [tarefas, setTarefas] = useState<tarefas[]>([]);

  const salvarTarefa = async () => {
    const payload: tarefas = {
      tarefa: tarefa,
      descricao: descricao,
    };

    if(tarefa == '' || descricao == ''){
      alert('Porfavor digite uma tarefa invalida')
      return
    }

    await api.post("/tarefas", payload);

    window.location.reload();
  };

  const carregarTarefas = async () => {
    const responseTarefas = await api.get("/tarefas");
    const dataTarefa = responseTarefas.data;

    setTarefas(dataTarefa);
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <>
      <div className="px-28 py-14 bg-blue-800">
        <form className="grid grid-cols-2 gap-5">
          <div className="grid gap-3">
            <label
              className="text-4xl text-white font-semibold"
              htmlFor="tarefa"
            >
              Tarefa
            </label>
            <input
              type="text"
              placeholder="Digite sua tarefa"
              className="rounded-md px-5 py-1 w-[100%] col-span-3"
              name="tarefa"
              id="tarefa"
              onChange={(e) => setTarefa(e.target.value)}
            />
            <div className="col-span-1 bg-yellow-500 w-60 h-0.5"></div>
          </div>

          <div className="grid gap-3">
            <label
              className="text-4xl text-white font-semibold"
              htmlFor="descricao"
            >
              Descrição
            </label>
            <input
              type="text"
              placeholder="Descreva sua tarefa"
              className="rounded-md px-5 py-1 w-[100%] col-span-3"
              name="descricao"
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            />
            <div className="col-span-1 bg-yellow-500 w-60 h-0.5"></div>
          </div>
        </form>
        <div className="flex justify-center mt-6">
          <button
            className="bg-white px-9 py-3 rounded-md w-[50%] text-xl font-semibold"
            onClick={salvarTarefa}
          >
            Enviar
          </button>
        </div>

        <div className="bg-blue-900 p-16 rounded-md my-10">
          <section>
            {tarefas.map((tarefa) => (
                <div className="bg-white m-4 py-2 px-3 rounded-md" key={tarefa.id}>
                    <h5 className="text-5xl mb-3">{tarefa.tarefa}</h5>
                    <p className="text-xl bg-blue-300 p-3 rounded-md w-[100%]">{tarefa.descricao}</p>
                </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
