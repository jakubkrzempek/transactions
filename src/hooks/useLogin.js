import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {
            // sign the user out
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            // dispatch logout action
            dispatch({ type: 'LOGIN', payload: res.user })

            // update state

            setIsPending(false)
            setError(null)

        }
        catch (err) {

            console.log(err.message)
            setError(err.message)
            setIsPending(false)

        }
    }


    return { login, error, isPending }
}