import { useState } from 'react'

const useError = (initialError : boolean) => {
    
    const [ error, setError ] = useState(initialError)
    
    const handleErrorChange = (newError : boolean)  => {
        setError(newError)
    }

    return { error, handleErrorChange }
}

export default useError