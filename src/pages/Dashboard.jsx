import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useExpenses } from "../context/ExpenseContext";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import useExpenseStats from "../hooks/useExpenseStats";

// import {FriendProvider} from "../practice/FriendContext"
// import FriendList from "../practice/FriendList";
// import FriendForm from '../practice/FriendForm'

// import {useState} from "react";

const Dashboard = () => {
  const { expenses, budget, setBudget } = useExpenses();
  const { spent, remainingBudget, percentage, barColor, charData, COLORS } = useExpenseStats();
  return (
    <>
      <h1 style={{ padding: "10px 20px 30px 50px" }}>
        Welcome To Expense Tracker Dashboard
      </h1>
      {/* <p>{JSON.stringify(charData)}</p> */}
      {/* Show chart only when there are expenses */}

      {/* UI for Budget */}
      <input type="number" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
      <span>Spent: {spent}</span>
      <p>Remaining: {remainingBudget}</p>
      <div className="outer" style={{width:'100%', background:'grey'}}>

        <div className="inner" style={{width:`${percentage}%`, height:'5vh', backgroundColor:`${barColor}`}}>

        </div>
      </div>

      {/* UI for PieChart */}
      {expenses.length > 0 && (
        <PieChart width={300} height={300}>
          <Pie
            data={charData}
            dataKey='value'
            nameKey='name'
            cx='50%'
            cy='50%'
            outerRadius={100}
          >
            {charData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}

      <ExpenseForm />
      <ExpenseList />

      {/* <FriendProvider>
  <FriendForm />
  <FriendList />

  </FriendProvider> */}
    </>
  );
};

export default Dashboard;
