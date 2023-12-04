import React, { useEffect, useRef, useState } from 'react'
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection, _query, _orderBy) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState();

    const query = useRef(_query).current;
    const orderBy = useRef(_orderBy).current;
    useEffect(() => {
        let ref = projectFirestore.collection(collection);
        if (query) {
            ref = ref.where(...query)
        }
        if (orderBy) {
            ref = ref.orderBy(...orderBy);

        }

        const unsub = ref.onSnapshot(snapshot => {
            let result = [];
            snapshot.docs.forEach(doc => {
                result.push({ ...doc.data(), id: doc.id })
            })
            setDocuments(result);
        }, error => {
            console.log(error);
            setError('could not fetch the data');
        });

        return () => unsub()

    }, [collection, query, orderBy])
    return { documents, error }
}

