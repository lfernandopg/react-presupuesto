import { useState } from 'react'

const useBudget = (initialBudget : number) => {
    const [ budget, setBudget ] = useState({
        actual : initialBudget,
        residual :  initialBudget
    })

    const handleBudgetChange = (newBudget : {actual : number, residual: number}) => {
        setBudget(newBudget)
    }
    
    return { budget, handleBudgetChange }
}

export default useBudget