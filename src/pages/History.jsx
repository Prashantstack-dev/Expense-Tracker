// this will hold the ExpenseList
import ExpenseList from "../components/ExpenseList";
import React from 'react'
import exportCSV from "../utils/exportCSV";
import {useExpenses} from "../context/ExpenseContext";

const History = () => {
  const {expenses} = useExpenses();
  return (
    <div>
      <ExpenseList/>
      <button onClick={() => exportCSV(expenses)}>Export</button>
    </div>
  )
}

export default History
