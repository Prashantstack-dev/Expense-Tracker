import React from "react";
import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext.jsx";
import {useNavigate} from "react-router-dom";


const ExpenseForm = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    amount: "",
    date: ""
  });

//  const everything = useExpenses() const addExpense = everything.addExpense, destructuring everything inside addExpense
const { addExpense } = useExpenses();

const navigate = useNavigate();
  //form handle default behaviour
  const handleSubmit = (e) => {
    e.preventDefault();

    //sending the context to the form through custom hooks
    addExpense(form);
    // alert(`Sumbitting Title: ${form.title}`);
    //clear form after submitting
    setForm({
      title: "",
      category: "",
      amount: "",
      date: ""
    });

    //navigate to history
    navigate('/history');
  };

  //updating as per the user input for title to setForm
  const handleChange = (e) => {
   
    return setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  return (
    <div className="px-4 py-4 rounded-md text-base mb-4" >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
        <input
          type='text'
          name='title'
          value={form.title}
          placeholder='Spending on...'
          onChange={handleChange}
          className="border rounded p-2 w-full "
        ></input>
        <select
          name='category'
          value={form.category}
          placeholder='category'
          onChange={handleChange}
          className="border rounded p-2 w-full"
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Electricity</option>
          <option>Internet</option>
        </select>
        <input
          type='number'
          name='amount'
          value={form.amount}
          placeholder='amount'
          onChange={handleChange}
          className="border rounded p-2 w-full"
        ></input>
        <input
          type='date'
          name='date'
          value={form.date}
          placeholder='date'
          onChange={handleChange}
          className="border rounded p-2 w-full"
        ></input>
        {/* <p>
          {" "}
          Live onChange:{" "}
          {[
            `${form.title} ,$: ${form.amount}, ${form.category}, ${form.date}`
          ]}{" "}
        </p> */}
        <div className="flex justify-center ">
        <button type='submit' className="px-4 py-2 bg-sky-500 hover:bg-sky-700 rounded cursor-pointer"> ➕ </button>
       </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
