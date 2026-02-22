import React from 'react'
import {useExpenses} from "../context/ExpenseContext"

const ExpenseList = () => {
    const {expenses, deleteExpense} = useExpenses();
  return (
    <ul>
     {expenses.map((item, index)=> {return <li key={index}>
        {`${item.title} ${item.amount} ${item.category} ${item.date} `}
        <button onClick={() => {deleteExpense(item.id)}}>
          Delete
        </button>
     </li>

     })}
    </ul>
  )
}

export default ExpenseList
