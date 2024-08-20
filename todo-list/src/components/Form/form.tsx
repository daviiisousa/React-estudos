import { useState } from "react"

export const Form = () => {
    const [tarefa, setTarefa] = useState('')
    const [descricao, setDescricao] = useState('')

    return(
        <>
            <div className="px-28 py-14 bg-blue-800">
                <form className="grid grid-cols-2 gap-5" >
                    <div className="grid gap-3">
                        <label
                        className="text-4xl text-white"
                        htmlFor="tarefa">
                            Tarefa
                        </label>
                        <input
                        type="text"
                        placeholder="Digite sua tarefa"
                        className="rounded-md px-5 py-1 w-[100%] col-span-3"
                        name="tarefa"
                        id="tarefa"
                        onChange={(e) => setTarefa(e.target.value)}/>
                        <div className="col-span-1 bg-yellow-500 w-60 h-0.5"></div>
                    </div>

                    <div className="grid gap-3">
                        <label
                        className="text-4xl text-white"
                        htmlFor="descricao">
                            Descrição
                        </label>
                        <input
                        type="text"
                        placeholder="Descreva sua tarefa"
                        className="rounded-md px-5 py-1 w-[100%] col-span-3"
                        name="descricao"
                        id="descricao"
                        onChange={(e) => setDescricao(e.target.value)}/>
                        <div className="col-span-1 bg-yellow-500 w-60 h-0.5"></div>
                    </div>
                </form>

                <div className="bg-blue-900 p-16 rounded-md my-10">
                    <section>
                        
                    </section>
                </div>
            </div>
        </>
    )
}