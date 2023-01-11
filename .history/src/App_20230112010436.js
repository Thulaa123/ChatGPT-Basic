import React, {useState} from "react";
import './App.css';

function App() {
  const [ message, setMessage ] = useState('');
  const [ response, setResponse ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({message}),
    })
    
  }
}
