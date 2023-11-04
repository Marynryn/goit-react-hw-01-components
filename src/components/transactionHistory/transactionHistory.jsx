import transactions from "../../data/transactions.json";
import css from "../transactionHistory/transactionHistory.module.css"

export const TransactionHistory = () => (<table className={css.transaction_history}>
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>
<tbody>
<TransactionHistoryItem/>
</tbody>
</table>);

const TransactionHistoryItem = () => {
    return transactions.map(({id,type,amount,currency})=> (<tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      ))};