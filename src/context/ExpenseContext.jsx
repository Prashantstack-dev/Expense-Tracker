import React from 'react'
import {createContext, useState, useContext, useEffect} from 'react'



const ExpenseContext = createContext();  //create a board

// createContext() → creates the board
// ExpenseProvider → mounts it on the wall
// value={{ expenses }} → pins the data so any component can read it
// {children} → renders whatever is wrapped inside the Provider


export function ExpenseProvider({children}){
    const [expenses, setExpenses] = useState(()=> {
     const storedData = localStorage.getItem('expenses');
     if(storedData) return JSON.parse(storedData)
      else return [];
    });
    
    useEffect(() => {
      //save expenses to local storage here
       localStorage.setItem("expenses", JSON.stringify(expenses))
    
     
    }, [expenses])

    
    //expense is just a parameter
    function addExpense(expense){
        setExpenses([
          ...expenses,  //copy old array
           {            //add one new object
            ...expense, //copy expense object
           amount: parseFloat(expense.amount), //override amount
           id:Date.now()  //add id
          }
        ]);
    }
    
    function deleteExpense(id){
     const filter = expenses.filter((item)=> id !== item.id);
     setExpenses(filter);
    }

  return (
    //Mount the board to wall and pin data as a children props
    <ExpenseContext.Provider value={{expenses, addExpense, deleteExpense}}>
        {children} 
    </ExpenseContext.Provider>
  )
}

export function useExpenses(){
return useContext(ExpenseContext);
}
