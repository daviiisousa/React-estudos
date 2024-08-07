import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalform.css'

export const ButaoAdicionar = () => {
  const [mostra, setMostrar] = useState(false);

  const handleClose = () => setMostrar(false);
  const handleShow = () => setMostrar(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Adicionar remedio a tabela
      </Button>

      <Modal show={mostra} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar remedio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div>
                    <input placeholder='nome do remedio' type="text" />
                </div>
                <div>
                    <input placeholder='Qtd' type="number" />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
