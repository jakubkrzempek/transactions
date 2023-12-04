import React from 'react'
import styles from './Home.module.css'
import { useFirebase } from '../../hooks/useFirebase'

export const TransactionList = ({ transactions }) => {
    const { deleteDocument } = useFirebase('transaction')
    return (
        <ul className={styles.transactions}>
            {transactions.map((transaction => {
                return <li key={transaction.id}>
                    <p className={styles.name}>{transaction.name}</p>
                    <p className={styles.amount}>{transaction.amount} zł</p>
                    <button onClick={() => deleteDocument(transaction.id)}>X</button>
                </li>
            }))}
        </ul>
    )
}
