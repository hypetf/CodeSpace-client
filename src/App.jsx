import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/v1/test',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <p>
          {data && data}
        </p>
      </header>
    </div>
  )
}

export default App
