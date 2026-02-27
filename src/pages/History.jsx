// this will hold the ExpenseList
import ExpenseList from "../components/ExpenseList";
import React from 'react'
import exportCSV from "../utils/exportCSV";
import {useExpenses} from "../context/ExpenseContext";

const History = () => {
  const {expenses} = useExpenses();
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Transaction History</h2>
        <button 
          className='bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 shadow-lg shadow-slate-200 active:scale-95 transition-all cursor-pointer' 
          onClick={() => exportCSV(expenses)}
        >
          Export CSV
        </button>
      </div>
      <ExpenseList/>
    </div>
  )
}

export default History
