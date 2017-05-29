import React from 'react'
import EachExpense from './EachExpense'

export default function Expenses(props){

    const allExpenses = props.expenses.map( (el) => <EachExpense key={el.id} xpdata={el} onDelete={props.onDelete}/> )

    const totalExpenses = props.expenses.reduce( (current, expense) => {
      return parseFloat(expense.value) + current
    }, 0.0)

    return(
        <table className="table-striped">
         Total Expenses: ${parseFloat(totalExpenses).toFixed(2)}
          <tbody>
            <tr>
              <th className="t-headers">Name</th>
              <th className="t-headers">Value</th>
              <th className="t-headers">Type</th>
              <th className="t-headers"> Recurring</th>
              <th className="t-headers">Date</th>
            </tr>
            {allExpenses}
          </tbody>
        </table>
    )
}
