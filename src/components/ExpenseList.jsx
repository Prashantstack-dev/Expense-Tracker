import React from 'react'
import {useExpenses} from "../context/ExpenseContext"

const ExpenseList = () => {
    const {expenses} = useExpenses();
  return (
    <ul>
     {expenses.map((item, index)=> {return <li key={index}>
        {`${item.title} ${item.amount} ${item.category} ${item.date} `}
     </li>

     })}
    </ul>
  )
}

export default ExpenseList
