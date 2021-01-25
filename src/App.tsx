import React, { useState, useEffect} from 'react'
import FormBudget from './components/FormBudget'
import FormExpense from './components/FormExpense'
import ListExpenses from './components/ListExpenses'
import SumaryBudget from './components/SumaryBudget'
import useBudget from './hooks/useBudget'
import useListExpenses from './hooks/useListExpenses'


function App() {
    const initialBudget = 0
    const { budget, handleBudgetChange }  = useBudget(initialBudget)
    const { listExpenses, handleListExpensesChange } = useListExpenses([])

    return(
        <div
            className="container"
        >
            <header>
                <h1>Gasto Semanal</h1>
                <div
                    className="content-main content"
                >
                    {   
                     initialBudget === budget.actual ? 
                        <FormBudget
                            handleBudgetChange={handleBudgetChange}
                        />
                    :
                        <div
                            className="row"
                        >
                            <div
                                className="one-half column"
                            >
                                <FormExpense
                                    handleListExpensesChange={handleListExpensesChange}
                                    listExpenses={listExpenses}
                                    budget={budget}
                                    handleBudgetChange={handleBudgetChange}
                                />
                            </div>
                            <div
                                className="one-half column"
                            >
                                <ListExpenses
                                    listExpenses={listExpenses}
                                />
                                <SumaryBudget
                                    budget={budget}
                                />
                            </div>
                        </div>   
                    }
                </div>
                
            </header>
        </div>
    )
}

export default App