import React from 'react'

import './App.css';
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [mode,setMode] = React.useState(false)
  function toggle(){
    setMode(prevMode => !prevMode)
  }
  return (
    <div className='container'>
      <Header darkMode={mode} toggleDarkMode={toggle}/>
      <Main darkMode={mode}/>
      
    </div>
  )
}
export default App;
