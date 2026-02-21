import React from 'react'
import {createContext, useState, useContext} from 'react'



const ExpenseContext = createContext();  //create a board

// createContext() → creates the board
// ExpenseProvider → mounts it on the wall
// value={{ expenses }} → pins the data so any component can read it
// {children} → renders whatever is wrapped inside the Provider


export function ExpenseProvider({children}){
    const [expenses, setExpenses] = useState([]);

    function addExpense(expense){
        setExpenses([...expenses, expense]);
    }
    

  return (
    //Mount the board to wall and pin data as a children props
    <ExpenseContext.Provider value={{expenses, addExpense}}>
        {children} 
    </ExpenseContext.Provider>
  )
}

export function useExpenses(){
return useContext(ExpenseContext);
}
