import { ButaoPedido } from "../../components/ButaoPedido"
import { ContentHeader } from "../../components/ContentHeader"
import { Tabela } from "../../components/Tabela"
import { TrParaBotao } from "../../components/TrParaBotao"

export const Users = () =>{
    return(
        <>
            <section>
                <ContentHeader title="Remedios"/>
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
                    </tr>
                    <tr>
                     <td>Parecetamol</td>
                     <td>10</td>
                     <TrParaBotao>
                        <ButaoPedido />
                     </TrParaBotao>
                    </tr>
                    </tbody>
                </Tabela>
            </section>
        </>
    )
}