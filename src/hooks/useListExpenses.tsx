import { useState } from 'react';

interface Expense {
    name : string,
    amount : number 
}

const useListExpenses = (initialListExpenses : Expense[]) => {
    const [ listExpenses, setListExpenses ] = useState(initialListExpenses)

    const handleListExpensesChange = (newListExpenses : Expense[]) => {
        setListExpenses(newListExpenses)
    }

    return { listExpenses, handleListExpensesChange }
}

export default useListExpenses