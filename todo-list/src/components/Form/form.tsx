import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Swal from "sweetalert2";

export const Form = () => {
  const [tarefa, setTarefa] = useState("");

  const [descricao, setDescricao] = useState("");

  const [tarefas, setTarefas] = useState<tarefas[]>([]);

  const salvarTarefa = async () => {
    const payload: tarefas = {
      tarefa: tarefa,
      descricao: descricao,
    };

    if (tarefa == "" || descricao == "") {
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
        <div className=" grid grid-cols-2 gap-5 ">
          <div className="bg-blue-950  m-4 text-center w-[450px] mx-auto py-3 rounded-xl">
            <p className="text-xl text-blue-200">
              Total de tarefas: {tarefas.length}
            </p>
          </div>
          <div className="bg-blue-950  m-4 text-center w-[450px] mx-auto py-3 rounded-xl">
            <p className="text-xl text-blue-200">Em breve...</p>
          </div>
        </div>
        <div className="bg-blue-900 p-16 rounded-md my-10">
          <section>
            {tarefas.map((tarefa) => (
              <div
                className="bg-white m-4 py-2 px-3 rounded-md grid grid-cols-3"
                key={tarefa.id}
              >
                <h5 className="text-5xl mb-3">{tarefa.tarefa}</h5>
                <div className="flex gap-3 justify-end col-span-2">
                  <button>
                    <span className="material-symbols-outlined bg-green-600 p-2 text-white rounded-md">
                      check
                    </span>
                  </button>
                  <button onClick={() => apagarTarefa(tarefa)}>
                    <span className="material-symbols-outlined bg-red-600 p-2 text-white rounded-md">
                      delete
                    </span>
                  </button>
                </div>
                <p className="text-xl bg-blue-300 p-3 rounded-md w-[100%] col-span-3">
                  {tarefa.descricao}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
