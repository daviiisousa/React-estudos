import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalform.css'
import { api } from '../../../utils/api';
import { Tabela } from '../../Tabela';


export const ButaoAdicionar = () => {

  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [descricao, setDescricao] = useState('')
  const [remedios, setRemedios] = useState<Remedios[]>([]);

  const [mostra, setMostrar] = useState(false);

  const handleClose = () => setMostrar(false);
  const handleShow = () => setMostrar(true);

  const salvarRemedio = async () => {
    const corpo: Remedios = {
      nome: nome,
      quantidade: quantidade,
      descrição: descricao
    }

    if (nome === '' || quantidade <= 0 || descricao === '') {
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

  const removerRemedio = async (remedio: Remedios) => {
    await api.delete(`/remedios/${remedio.id}`)

    const remediosAtualizados = remedios.filter(r => r.id !== remedio.id);

    setRemedios(remediosAtualizados);

  };

  useEffect(() => {
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
            <div className='divForm'>
              <label htmlFor="nome">Nome</label>
              <input
                id='nome'
                placeholder='nome do remedio'
                type="text"
                onChange={(e) => { setNome(e.target.value) }} />
            </div>
            <div className='divForm'>
              <label htmlFor="quantidade">Quantidade</label>
              <input
                id='quantidade'
                placeholder='Qtd'
                type="number"
                onChange={(e) => { setQuantidade(parseInt(e.target.value)) }} />
            </div>
            <div className='divForm'>
              <label htmlFor="descricao">Descrição</label>
              <input
                id='descricao'
                placeholder='Descrição'
                type="text"
                onChange={(e) => { setDescricao(e.target.value) }} />
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
            <th>Descrição</th>
            <th>butoes</th>
          </tr>
        </thead>
        <tbody>
          {remedios.map((remedio: Remedios) => (
            <tr key={remedio.id}>
              <td>{remedio.nome}</td>
              <td>{remedio.quantidade}</td>
              <td id='tdDescricao'><p>{remedio.descrição}</p></td>
              <td> <button className="btn btn-danger" onClick={() => removerRemedio(remedio)} >remover</button> </td>
            </tr>
          ))}
        </tbody>
      </Tabela>
    </>
  );
}
