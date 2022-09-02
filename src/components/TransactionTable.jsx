import TransactionTableRow from './TransactionTableRow';
import { TransactionService } from '../services/Transaction.service';
import { useState } from 'react';

const TransactionTable = ({transactions}) => {
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map((tran, index) => {
                        return (
                            <TransactionTableRow transactionData={tran} key={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TransactionTable;