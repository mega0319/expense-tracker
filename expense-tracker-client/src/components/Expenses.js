import React from 'react'
import EachExpense from './EachExpense'

export default function Expenses(props){

    const allExpenses = props.expenses.map( (el) => <EachExpense xpdata={el} /> )

    return(
      <div>
        {allExpenses}
      </div>
    )

}
