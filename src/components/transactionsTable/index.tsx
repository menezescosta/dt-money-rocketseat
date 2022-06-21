import * as C from './style';

const TransactionsTable:React.FC=()=>{
    return(
        <C.Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    
                    <tr>
                        <td>aluguel</td>
                        <td className='withdraw'>-R$12.000</td>
                        <td>casa</td>
                        <td>13/02/2012</td>
                    </tr>
        
                </tbody>
            </table>
        </C.Container>
    )
}
export default TransactionsTable;