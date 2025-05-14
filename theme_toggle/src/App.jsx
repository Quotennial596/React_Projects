import { createContext, useState } from 'react'
import './App.css'
import Child1 from './components/Child1';



const ThemeContext = createContext();


function App() {


const [theme, setTheme] = useState('light')
  return (
    <>

    <ThemeContext.Provider value={{theme, setTheme}}>
       <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
         <Child1 />
       </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App


export { ThemeContext };
