import { createContext, useState, useContext, useEffect } from "react";
import supabase from "../utils/supabaseClient";
import { useAuth } from "@clerk/clerk-react"

const ExpenseContext = createContext(); //create a board

// createContext() → creates the board
// ExpenseProvider → mounts it on the wall
// value={{ expenses }} → pins the data so any component can read it
// {children} → renders whatever is wrapped inside the Provider

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
 
  //Call useAuth() and destructure userId from returned object
  const {userId} = useAuth();

  async function fetchExpenses() {
    if(!userId) return;

    const { data, error } = await supabase
      .from("Expenses") //Name of database table
      .select('*') //select all column
      .eq('user_id', userId) //eq()filter to only get current user's expenses
      if(error){
        console.error("Error fetching data:", error)
      } else {
        console.log("Data:", data)
        setExpenses(data);
      }
  }
  
  

  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("budget");
    //if value is found parse it(localStorage uses string) and use it
    if (savedBudget) {
      return JSON.parse(savedBudget);
    }
    return 0; //false
  });

  useEffect(() => {
    //save budget to local storage
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]); // [budget] means: Only run this code when budget changes.

  //expense is just a parameter
  async function addExpense(expense) {
     const { data, error } = await supabase
      .from("Expenses") //Name of database table
      .insert({...expense, user_id: userId}) // spreads all the expense fields and adds user_id
     if(error){
        console.error("Error fetching data:", error)
      } else {
        console.log("Data:", data)
        fetchExpenses();
      }
  }
  

  async function deleteExpense(id) {
    const {data, error} = await supabase
    .from('Expenses') //Name of database table on supabase
    .delete()
    .eq('id',id ) //Filter:Delete where id equals to idToDelete
    if(error){
        console.error("Error fetching data:", error)
      } else {
        console.log("Data:", data)
        fetchExpenses();
      }
   
  }
  //For Login
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    //handle sign-in
    setUser(userData);
  };

  const signOut = (userData) => {
    //handle sign-out by removing the data or token
    setUser(null);
  };

  return (
    //Mount the board to wall and pin data as a children props
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        budget,
        setBudget,
        signIn,
        signOut
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
// useExpenses() a tiny helper function so you don’t need to rewrite that every time
export function useExpenses() {
  return useContext(ExpenseContext);
}
