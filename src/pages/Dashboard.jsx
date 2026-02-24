import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useExpenses } from "../context/ExpenseContext";
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

// import {FriendProvider} from "../practice/FriendContext"
// import FriendList from "../practice/FriendList";
// import FriendForm from '../practice/FriendForm'



// import {useState} from "react";

const Dashboard = () => {
const {expenses} = useExpenses();
//transform expenses array into chart data
const COLORS = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#3b82f6']
const charData = expenses.reduce((acc, expense)=> { 
    //Does my sheet already have a row for this category?"
    const existing = acc.find(item => item.name === expense.category)
    if(!existing) {
     acc.push({name: expense.category, value: expense.amount})
     
    }else{
       existing.value += expense.amount
    }
    return acc;
}, [])


 return (
  <>
  <h1 style={{padding:"10px 20px 30px 50px"}}>Welcome To Expense Tracker Dashboard</h1>
  {/* <p>{JSON.stringify(charData)}</p> */} 
{/* Show chart only when there are expenses */}
 { expenses.length >0 && <PieChart width={300} height={300}>
  <Pie 
    data={charData} 
    dataKey="value" 
    nameKey="name"
    cx="50%" 
    cy="50%" 
    outerRadius={100}
  >
    {charData.map((entry, index) => (
    <Cell key={index} fill={COLORS[index % COLORS.length]} />
  ))}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>}
 

  <ExpenseForm />
  <ExpenseList />
  
  {/* <FriendProvider>
  <FriendForm />
  <FriendList />

  </FriendProvider> */}
 
 
  </>
 )
}

export default Dashboard;
