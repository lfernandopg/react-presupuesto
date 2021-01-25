import Error from './Error'
import useError from '../hooks/useError'
import useForm from '../hooks/useForm'
import shortid from 'shortid'

interface Values  {
    name : string
    amount : number | string
}

const FormExpense = ({listExpenses, handleListExpensesChange, budget, handleBudgetChange} : 
{listExpenses : any, handleListExpensesChange : any, budget : any, handleBudgetChange : any}) => {

    const { values, handleInputChange, reset } = useForm<Values>({
        name : '',
        amount : ''
    })

    const { error, handleErrorChange } = useError(false)

    const addExpense = (e : any) => {
        e.preventDefault();
        if (typeof(values.amount) === 'string') {
            var amount = parseInt(values.amount)
        } else {
            amount = values.amount
        }
        let name = values.name
        if (amount <= 0 || isNaN(amount) || name.trim() === '' || budget.residual - amount <= 0) {
            handleErrorChange(true)
        } else {
            handleErrorChange(false)
            handleListExpensesChange(
                [...listExpenses, {
                    name,
                    amount,
                    id : shortid.generate()
                }]
            )
            handleBudgetChange({
                actual : budget.actual,
                residual : budget.residual - amount
            })
            reset()
        }
    }

    return (
        <form
            onSubmit={addExpense}
        >
            <h2>Agrega tus gastos aqui</h2>
            {
                error ? 
                    <Error
                        message="Ningun campo puede estar vacio y el gasto debe ser menor al restante"
                    ></Error>
                :
                    null
            }
            <div
                className="field"
            >
                <label htmlFor="name">Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Nombre del gasto"
                    name="name"
                    onChange={handleInputChange}
                    value={values.name}
                />
            </div>
            <div
                className="field"
            >
                <label htmlFor="amount">Cantidad</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Cantidad del gasto"
                    name="amount"
                    onChange={handleInputChange}
                    value={values.amount}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}

export default FormExpense