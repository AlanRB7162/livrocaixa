import { Link } from "react-router-dom";

export function Register(){
    return(
        <section className="register">
            <div className="tableReg">
                <table className="tabela" border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Valor (R$)</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Compra de material de escritório</td>
                        <td>08/12/2024</td>
                        <td>14:00</td>
                        <td>200,00</td>
                        <td>Pago</td>
                        <td><Link to="/register/edit">Editar</Link> | <Link to="/register/delete">Deletar</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Recebimento de Cliente</td>
                        <td>08/12/2024</td>
                        <td>12:23</td>
                        <td>1500,00</td>
                        <td>Recebido</td>
                        <td><Link to="/register/edit">Editar</Link> | <Link to="/register/delete">Deletar</Link></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pagamento de Serviços</td>
                        <td>07/05/2024</td>
                        <td>10:30</td>
                        <td>750,00</td>
                        <td>Pago</td>
                        <td><Link to="/register/edit">Editar</Link> | <Link to="/register/delete">Deletar</Link></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Recebimento de cliente</td>
                        <td>07/05/2024</td>
                        <td>09:45</td>
                        <td>650,00</td>
                        <td>Recebido</td>
                        <td><Link to="/register/edit">Editar</Link> | <Link to="/register/delete">Deletar</Link></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Pagamento de impostos</td>
                        <td>06/05/2024</td>
                        <td>15:27</td>
                        <td>1345,23</td>
                        <td>Pago</td>
                        <td><Link to="/register/edit">Editar</Link> | <Link to="/register/delete">Deletar</Link></td>
                    </tr>
                    <tr>
                    <td>5</td>
                        <td>Pagamento de emolumentos</td>
                        <td>06/05/2024</td>
                        <td>12:30</td>
                        <td>850,00</td>
                        <td>Pago</td>
                        <td><Link to="/register/edit">Editar</Link> | <Link to="/register/delete">Deletar</Link></td>
                    </tr>
                </table>
            </div>
            <br></br>
            <div className="ResumoFinanceiro">
                <div className="TotalPagos">
                    <label htmlFor="tpagos">Total de pagos</label>
                    <input type="text" id="tpagos"/>
                </div>
                <div className="TotalRecebidos">
                    <label htmlFor="trecebidos">Total de recebidos</label>
                    <input type="text" id="trecebidos"/>
                </div>
                <div>
                    <label htmlFor="saldo">Saldo</label>
                    <input type="text" id="saldo"/>
                </div>
                <div className="Nlancamento">
                    <Link to="/register/nlancamento">
                        <button>Novo lançamento</button>
                    </Link>
                </div>
            </div>
        </section>  
    )
}