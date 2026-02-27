import React from 'react'
import {useExpenses} from "../context/ExpenseContext"


const ExpenseList = () => {
    const {expenses, deleteExpense} = useExpenses();
  return (
    <ul>
     {expenses.map((item, index)=> {return <li className="flex flex-row gap-3 p-4 justify-between items-center bg-white shadow rounded-lg border border-gray-200 p-4 gap-3" key={index}>
        {`${item.title} ${item.amount} ${item.category} ${item.date} `}
        <button className="text-white px-3 py-1 rounded bg-red-500 hover:bg-red-700 border border-gray-200" onClick={() => {deleteExpense(item.id)} }>
          Delete
        </button>
     </li>

     })}
    </ul>
  )
}

export default ExpenseList
