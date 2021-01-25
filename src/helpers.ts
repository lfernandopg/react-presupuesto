export const reviewBudget = (budget : any) => { 
    let className

    if ((budget.actual / 4) > budget.residual) {
        className = 'alert-danger'
    } else if ((budget.actual / 2) > budget.residual) {
        className = 'alert-warning'
    } else {
        className = 'alert-success'
    }

    return className
}