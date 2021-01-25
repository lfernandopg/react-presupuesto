import { Fragment } from 'react'
import { reviewBudget } from '../helpers'

const SumaryBudget = ( {budget} : {budget : any} ) => {
    return (
        <Fragment>
            <div
                className="alert alert-primary"
            >
                Presupuesto: ${budget.actual}
            </div>
            <div
                className={`alert ${reviewBudget(budget)}`}
            >
                Restante: ${budget.residual}
            </div>
        </Fragment>
    )
}

export default SumaryBudget