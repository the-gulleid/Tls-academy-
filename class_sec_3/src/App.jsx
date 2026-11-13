import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Login from './login.jsx'
import  Side from './side.jsx'
import Name from './username.jsx';


function App() {
  const [username , setusername]=useState(" ");

  return (
    <>
        <Login/>
        <Side username ="gulled"/>
        <input type={"text"} value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <h1>hello {username} </h1>
        <Name/>

    </>
  )
}

export default App
