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

    const[budget, setBudget] = useState(()=> {
      const savedBudget = localStorage.getItem('budget');
      //if value is found parse it(localStorage uses string) and use it
      if(savedBudget){
        return JSON.parse(savedBudget)
      }
      return 0;
    });

    useEffect(() => {
      //save budget to local storage
      localStorage.setItem("budget", JSON.stringify(budget))
     
    }, [budget]) // [budget] means: Only run this code when budget changes.
    

    
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
    //For Login
    const[user, setUser] = useState(null);

    const signIn = (userData)=> {
//handle sign-in
setUser(userData);
    }

    const signOut = (userData)=> {
//handle sign-out by removing the data or token
setUser(null);
    }
  return (
    //Mount the board to wall and pin data as a children props
    <ExpenseContext.Provider value={{expenses, addExpense, deleteExpense, budget, setBudget, signIn, signOut}}>
        {children} 
    </ExpenseContext.Provider>
  )
}

export function useExpenses(){
return useContext(ExpenseContext);
}
