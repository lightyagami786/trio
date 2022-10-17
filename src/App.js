import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const[joke,setJoke]=useState('')

  let newJoke=()=>{

    fetch("https://v2.jokeapi.dev/joke/Any?type=single").then(res=>res.json()).then(res2=>{
      setJoke(res2.joke)
    })

  }

  useEffect(
    ()=>{
      newJoke();
      
    },[]);
  
  return (
    <>

    <div><h1>&nbsp;&nbsp;&nbsp;joke of the day</h1></div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{joke}
    <br/>
    <br/>
    <button onClick={newJoke} >click for more</button>    
    </>
  );
}

export default App;
