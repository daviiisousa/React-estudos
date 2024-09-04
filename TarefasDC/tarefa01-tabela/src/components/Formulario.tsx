export const Formulario = () => {
    return(
        <>
            <form>
                <div className="grid grid-cols-2 gap-3">
                    <label className="col-span-2 text-3xl font-bold" htmlFor="remedios">Remedio</label>
                    <input className="px-3 border-blue-900 border-2 rounded-md" type="text" name="remedios" id="remedios" placeholder="digite seu remedio" />
                </div>
            </form>
        </>
    )
}