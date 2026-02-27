import React from 'react'
import {useExpenses} from "../context/ExpenseContext"

const ExpenseList = () => {
    const {expenses, deleteExpense} = useExpenses();
  return (
    <ul className="space-y-4">
     {expenses.map((item, index)=> {
       return <li className="flex flex-row justify-between items-center bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl border border-white/40 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" key={index}>
         
         <h1 className='font-bold text-slate-800 text-lg tracking-tight'> {`${item.title}`} </h1>
         
         <span className='font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100'>{`$${item.amount}`} </span>
         
         <div className='hidden md:block bg-slate-900 text-slate-100 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest leading-none'>{` ${item.category}`}</div>
         
         <span className='text-xs font-semibold text-slate-400 uppercase tracking-tighter'>{`${item.date}`}</span>
         
         <button className="text-red-500 font-bold text-xs hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer" onClick={() => {deleteExpense(item.id)} }>
           DELETE
         </button>
      </li>
     })}
    </ul>
  )
}

export default ExpenseList