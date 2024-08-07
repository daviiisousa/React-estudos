export const ButaoApagar = () =>{
    return(
        <>
            <button 
            onClick={() => {alert('Pedido desfeito')}}
            className="btn btn-danger">Apagar</button>
        </>
    )
}