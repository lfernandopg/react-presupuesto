import Expense from './Expenses'

const ListExpenses = ({listExpenses} : {listExpenses : any}) => {
    return (
        <div
            className="expenses-incurred"
        >
            <h2>Listado</h2>
            {
                listExpenses.map( (expense : any) => (
                    <Expense
                        expense={expense}
                    />
                ))
            }
        </div>
    )
}

export default ListExpenses