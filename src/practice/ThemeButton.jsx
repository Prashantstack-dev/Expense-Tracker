import React from 'react'
import {useTheme} from './ThemeContext';


const ThemeButton = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div>
      <button style={{background:theme === 'dark' ? '#000' : '#eee', color: theme === 'dark' ? "#fff" : '#000'}} onClick={toggleTheme}>
       Toggle
      </button>
    </div>
  )
}

export default ThemeButton
