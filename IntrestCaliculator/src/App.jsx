import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import InterestForm from './Components/IntrestForm'
import Result from './Components/Result';

function App() {
  const [userinput, setUserinput]=useState({
      principal:10000,
      intrestrate:10,
      duration:10
  });

  function handlechange(inputtype,value){
      setUserinput(prevuser=>{
          return {
              ...prevuser,[inputtype]:+value
          }
      })
      console.log(userinput);
  };
  

  return (
    <>
      <Header />
      <h2>My first Reaft App</h2>
      <InterestForm userinput={userinput} handlechange={handlechange}/>
      <Result userinput={userinput}/>
    </>
  )
}

export default App
