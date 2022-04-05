import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home/Home';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState();
  useEffect(() => {
    // axios({
    //   method: 'GET',
    //   url: '/api/v1/test',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(res => {
    //     setData(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   });

    const themeStorage = localStorage.getItem('theme');
    if (!themeStorage) {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
    else {
      if (themeStorage === 'light')
        setTheme('light');
      else
        setTheme('dark');
    }
  }, []);

  function themeToggle() {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <div className={`App ${theme ? theme + '_theme' : 'light_theme'}`}>
      <ThemeContext.Provider value={{ theme, themeToggle }}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Navigate replace to="/" />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
