import React from 'react'
import "../App.css"
import {useTheme} from "../practice/ThemeContext";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {theme, toogleTheme} = useTheme();
  return (
    <div>
      <nav className="flex justify-center space-x-6 bg-blue-500 text-white">
      <ul className= "flex gap-5 list-none">
       {/* className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } */}
        <NavLink to='/' className={({isActive}) => isActive ? "font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900" : "font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"}>
        Home
        </NavLink>
        <NavLink to='/add' className={({isActive}) => isActive ? "font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900" : "font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"}>AddExpense</NavLink>
        <NavLink to='/history' className={({isActive}) => isActive ? "font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900" : "font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"}>History</NavLink>
       
       
      </ul>
        <button onClick={toogleTheme} className='bg-blue text-white-500 px-1 py-1 rounded cursor-pointer'>{theme === 'dark'? "🌛": "☀️"}</button>
      
      </nav>
    </div>
  )
}

export default Navbar
