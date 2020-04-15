import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App =()=> {

  const [ jokes, setJokes]= useState([]);

  const fetchJokes = async ()=>{
    const url= `https://api.chucknorris.io/jokes/random`;
    const response = await axios.get(url);
    setJokes(response.data);
  }

  useEffect (()=> {
    fetchJokes()
  },[])
  
 return (
   <div>
  <img src={jokes.icon_url}/>
     <div className="App">
      <h1>Chack Norris facts </h1>
      <button onClick={fetchJokes}>Get a joke</button>
      <div className='text'>{jokes.value}</div>
      
      
    </div></div>
  );
  }

export default App;
