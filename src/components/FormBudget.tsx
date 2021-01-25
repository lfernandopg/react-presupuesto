import { Fragment } from 'react'
import Error from './Error'
import useError from '../hooks/useError'
import useForm from '../hooks/useForm'

interface Values  {
    amount : number
}

const AskBudget = ({ handleBudgetChange } : { handleBudgetChange : any }) => {

    const { values, handleInputChange, reset }  = useForm<Values>({
        amount : 0
    })

    const { error, handleErrorChange } = useError(false)

    const addBudget = (e : any) => {
        e.preventDefault();
        let amount = values.amount
        if (amount <= 0 || isNaN(amount)) {
            handleErrorChange(true)
        } else {
            handleErrorChange(false)
            handleBudgetChange({
                actual : amount,
                residual : amount
            })
            reset()
        }
    }

    return(
        <Fragment>
            <h2>Introduce tu presupuesto</h2>
            {
                error ? 
                    <Error
                        message="El presupuesto es incorrecto"
                    ></Error>
                :
                    null
            }
            <form
                onSubmit={addBudget}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleInputChange}
                    name="amount"
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    )
}

export default AskBudget;