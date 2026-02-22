import React from 'react'
import "../App.css"
import {useTheme} from "../practice/ThemeContext";

const Navbar = () => {
  const {theme, toogleTheme} = useTheme();
  return (
    <div>
      <nav id="navbar">
      <ul  style={{display:"flex", justifyContent: 'space-between', flexDirection:"row", gap:"10px", padding: '10px 20px'}}>
        <li>Home</li>
        <li>Trips</li>
        <li>Expenses</li>
        <li>Settings</li>
        <li>Support</li>
      </ul>
        <button onClick={toogleTheme}>Toggle</button>
      </nav>
    </div>
  )
}

export default Navbar
