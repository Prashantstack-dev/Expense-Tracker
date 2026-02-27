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
    addExpense({...form, amount: Number(form.amount), id:Date.now() });
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
   //By using [ ] Don't use the word 'name'. Instead, look at the variable inside the brackets and use its value.
    return setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  return (
    <div className="max-w-2xl mx-auto px-8 py-10 rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.07)] mb-12 transition-all" >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Add Expense</h2>
        <input
          type='text'
          name='title'
          value={form.title}
          placeholder='Spending on...'
          onChange={handleChange}
          className="bg-slate-50/50 border border-slate-200 rounded-2xl p-4 w-full outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-medium text-slate-700 placeholder:text-slate-300"
        ></input>
        <select
          name='category'
          value={form.category}
          placeholder='category'
          onChange={handleChange}
          className="bg-slate-50/50 border border-slate-200 rounded-2xl p-4 w-full outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all cursor-pointer font-medium text-slate-600 appearance-none"
        >
          <option value='' disabled>Select Category</option>
          <option>Meals</option>
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
          className="bg-slate-50/50 border border-slate-200 rounded-2xl p-4 w-full outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-medium text-slate-700 placeholder:text-slate-300"
        ></input>
        <input
          type='date'
          name='date'
          value={form.date}
          placeholder='date'
          onChange={handleChange}
          className="bg-slate-50/50 border border-slate-200 rounded-2xl p-4 w-full outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-medium text-slate-600 uppercase text-xs tracking-widest"
        ></input>
        {/* <p>
          {" "}
          Live onChange:{" "}
          {[
            `${form.title} ,$: ${form.amount}, ${form.category}, ${form.date}`
          ]}{" "}
        </p> */}
        <div className="flex justify-center mt-2">
        <button type='submit' className="group relative w-full md:w-auto px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 active:scale-95 transition-all cursor-pointer overflow-hidden"> 
           <span className="relative z-10 flex items-center gap-2">Add to Ledger ➕</span>
        </button>
       </div>
      </form>
    </div>
  );
};

export default ExpenseForm;