import {createContext, useState, useContext} from 'react';

//Create context
 const ThemeContext = createContext();

//create custom hook to use the theme context
export const useTheme=()=> useContext(ThemeContext);

//Create the Provider Component
export const ThemeProvider = ({children}) => {
//Initilise state from localstorage
const [theme, setTheme] = useState('light');

function toogleTheme(){
    if(theme === 'light'){
        setTheme('dark');

    }else{
        setTheme('light');
    }
}
return (
    <ThemeContext.Provider value={{theme, toogleTheme}}>
        {children}
    </ThemeContext.Provider>
)
} 
