import { api } from "../../../utils/api";

export const ButaoApagar = () =>{

    
  const apagarRemedio = async () => {

    await api.delete("/remedios",);

    window.location.reload();

  };

    return(
        <>
            <button 
            onClick={() => {apagarRemedio}}
            className="btn btn-danger">Apagar</button>
        </>
    )
}