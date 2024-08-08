import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalform.css'
import { api } from '../../../utils/api';

export const ButaoAdicionar = () => {

  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const [mostra, setMostrar] = useState(false);

  const handleClose = () => setMostrar(false);
  const handleShow = () => setMostrar(true);

  const salvarRemedio = async () => {
    const corpo: Remedios = {
      nome: nome,
      quantidade: quantidade
    }

    await api.post("/remedios", corpo);
  }
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
                <div>
                    <input 
                    placeholder='nome do remedio' 
                    type="text" 
                    onChange={(e) => {setNome(e.target.value)}}/>
                </div>
                <div>
                    <input 
                    placeholder='Qtd' 
                    type="number" 
                    onChange={(e) => {setQuantidade(e.target.value)}}/>
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
    </>
  );
}
