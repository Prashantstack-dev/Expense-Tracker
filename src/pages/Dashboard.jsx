import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

// import {FriendProvider} from "../practice/FriendContext"
// import FriendList from "../practice/FriendList";
// import FriendForm from '../practice/FriendForm'



// import {useState} from "react";


const Dashboard = () => {
 return (
  <>
  <h1 style={{padding:"10px 20px 30px 50px"}}>Welcome To Expense Tracker Dashboard</h1>
 

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
