import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const [message,setMessage] = useState("inirial") //create state
  const [messageData,setMessageData] = useState("inirial data") //create state
  useEffect(function (){console.log("effect")},[message,messageData]) //create effect
  return (
    <div className="App">
     <h1>Effect</h1>
      {message}
      <button onClick={() => {
         setMessage("hi!")
       }}>
        change text
      </button>
      <br/>
      {messageData}
      <button onClick={() => {
        setMessageData("hi data!")
      }}>
        change text
      </button>
    </div>
  );
}

export default App;

// state and effect import in react folder
