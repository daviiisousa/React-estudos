import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalform.css'
import { api } from '../../../utils/api';
import { Tabela } from '../../Tabela';
import { ButaoApagar } from '../ButaoApagar';


export const ButaoAdicionar = () => {

  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [remedios, setRemedios] = useState([])

  const [mostra, setMostrar] = useState(false);

  const handleClose = () => setMostrar(false);
  const handleShow = () => setMostrar(true);

  const salvarRemedio = async () => {
    const corpo: Remedios = {
      nome: nome,
      quantidade: quantidade
    }

    if(nome === '' || quantidade <= 0){
      alert('preencha todas as informaçoes corretamente')
      return
    }

    await api.post("/remedios", corpo);
    setMostrar(false)

    window.location.reload();
  }
  

  const carregarRemedios = async () => {
    const responseAxios = await api.get("/remedios");
    const remediosApi = responseAxios.data
    
    setRemedios(remediosApi);
  }

  useEffect( () => {
    carregarRemedios()
  }, [])

  return (
    <>
      <Button className='ms-2' variant="primary" onClick={handleShow}>
       Adicionar remedio a tabela
      </Button>

      <Modal show={mostra} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar remedio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div id='divForm'>
                    <label htmlFor="nome">Nome</label>
                    <input
                    id='nome' 
                    placeholder='nome do remedio' 
                    type="text" 
                    onChange={(e) => {setNome(e.target.value)}}/>
                </div>
                <div id='divForm'>
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                    id='quantidade' 
                    placeholder='Qtd' 
                    type="number" 
                    onChange={(e) => {setQuantidade(parseInt(e.target.value))}}/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button
           variant="primary" onClick={salvarRemedio}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <Tabela>
          <thead>
              <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>butoes</th>
              </tr>
           </thead>
           <tbody>
              {remedios.map((remedio: Remedios, index) => (
                <tr key={index}>
                 <td>{remedio.nome}</td>
                 <td>{remedio.quantidade}</td>
                 <td><ButaoApagar /></td>
                </tr>
               ))}
            </tbody>
       </Tabela>
    </>
  );
}
