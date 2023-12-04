import { useEffect, useState } from 'react'
import { useFirebase } from '../../hooks/useFirebase';


export const TransactionForm = ({ uid }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const { addDocument, response } = useFirebase('transaction');
    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({
            uid,
            name,
            amount
        })

    }
    useEffect(() => {
        if (response.success) {
            setAmount("");
            setName("");
        }
    }, [response.success])
    return (
        <>
            <h3>Dodaj Transakcje</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nazwa transakcji:</span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    <span>Kwota(zł):</span>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <button>Dodaj transakcje</button>


            </form>
            <div>{response.error}{response.doc}</div>
        </>
    )
}
