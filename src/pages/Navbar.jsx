import React from 'react'
import "../App.css"
import {useTheme} from "../practice/ThemeContext";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {theme, toogleTheme} = useTheme();
  return (
    <div>
      <nav id="navbar">
      <ul  style={{display:"flex", justifyContent: 'space-between', flexDirection:"row", gap:"10px", padding: '10px 20px'}}>
       
        <NavLink to='/' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
        <NavLink to='/add' style={({isActive})=> ({ fontWeight: isActive ? "bold" : "normal"})}>AddExpense</NavLink>
        <NavLink to='/history' style={({isActive})=> ({ fontWeight: isActive ? "bold" : "normal"})}>History</NavLink>
       
       
      </ul>
        <button onClick={toogleTheme}>Toggle</button>
      </nav>
    </div>
  )
}

export default Navbar
