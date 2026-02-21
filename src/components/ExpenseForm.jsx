import React from "react";
import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext.jsx";

const ExpenseForm = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    amount: "",
    date: ""
  });
  const { addExpense } = useExpenses();

  //form handle default behaviour
  const handleSubmit = (e) => {
    e.preventDefault();

    //sending the context to the form through custom hooks
    addExpense(form);
    alert(`Sumbitting Title: ${form.title}`);
    //clear form after submitting
    setForm({
      title: "",
      category: "",
      amount: "",
      date: ""
    });
  };

  //updating as per the user input for title to setForm
  const handleChange = (e) => {
    console.log(e);
    return setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        <input
          type='text'
          name='title'
          value={form.title}
          placeholder='Spending on...'
          onChange={handleChange}
        ></input>
        <select
          type='text'
          name='category'
          value={form.category}
          placeholder='category'
          onChange={handleChange}
        >
          <option>Snacks</option>
          <option>Vegetable</option>
          <option>Electricity</option>
          <option>Internet</option>
        </select>
        <input
          type='number'
          name='amount'
          value={form.amount}
          placeholder='amount'
          onChange={handleChange}
        ></input>
        <input
          type='date'
          name='date'
          value={form.date}
          placeholder='date'
          onChange={handleChange}
        ></input>
        <p>
          {" "}
          Live onChange:{" "}
          {[
            `${form.title} ,$: ${form.amount}, ${form.category}, ${form.date}`
          ]}{" "}
        </p>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
