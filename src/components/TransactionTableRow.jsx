import { TransactionService } from "../services/Transaction.service";

const TransactionTableRow = ({transactionData}) => {
    return (
        <tr>
            <td>{`${transactionData.date.getMonth() + 1}/${transactionData.date.getDate()}/${transactionData.date.getFullYear()}`}</td>
            <td>{transactionData.amount}</td>
            <td>{transactionData.getPoints()}</td>
        </tr>
    )
}

export default TransactionTableRow;