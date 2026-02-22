import React from 'react'
import {useTheme} from './ThemeContext';


const ThemeButton = () => {
  const {theme, toogleTheme} = useTheme();
  return (
    <div>
      <button style={{background:theme === 'dark' ? '#000' : '#eee', color: theme === 'dark' ? "#fff" : '#000'}} onClick={toogleTheme}>
       Toggle
      </button>
    </div>
  )
}

export default ThemeButton
