import { ButaoAdicionar } from "../../components/Butoes/ButaoAdicionar"
import { ButaoApagar } from "../../components/Butoes/ButaoApagar"
import { ButaoPedido } from "../../components/Butoes/ButaoPedido"
import { ContentHeader } from "../../components/ContentHeader"
import { Tabela } from "../../components/Tabela"
import { TrParaBotao } from "../../components/TrParaBotao"

export const Users = () =>{

    return(
        <>
            <section>
                <ContentHeader title="Banco de Remedios 🧑‍⚕️"/>
                <ButaoAdicionar/>
                <Tabela>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Pedidos</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                     <td>Dipirona</td>
                     <td>5</td>
                     <TrParaBotao>
                        <ButaoPedido/>
                     </TrParaBotao>
                     <TrParaBotao>
                        <ButaoApagar />
                     </TrParaBotao>
                    </tr>
                    <tr>
                     <td>Parecetamol</td>
                     <td>10</td>
                     <TrParaBotao>
                        <ButaoPedido />
                     </TrParaBotao>
                     <TrParaBotao>
                        <ButaoApagar />
                     </TrParaBotao>
                    </tr>
                    </tbody>
                </Tabela>
            </section>
        </>
    )
}