import React from 'react';
import {useTheme} from './ThemeContext';
import ThemeButton from './ThemeButton';

const ThemeApp = () => {
   const {theme, toogleTheme} = useTheme(); 
    
  return (
    <div style={{backgroundColor: theme === 'dark'? 'black': 'white'}}>
     <ThemeButton />
    </div>
  )
}

export default ThemeApp
