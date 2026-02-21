import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
// import {useState} from "react";


const Dashboard = () => {
 return (
  <>
  <h1>Welcome To Expense Tracker Dashboard</h1>
  <ExpenseForm />
  <ExpenseList />
  </>
 )
}

export default Dashboard;
