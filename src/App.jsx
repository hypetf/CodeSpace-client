// MODULES
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ThemeController } from './Components/ThemeController/ThemeController';
import axios from 'axios';

// COMPONENTS
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/Auth/SignIn';
import Notification from './Components/Notification/Notification';
import Dashboard from './Components/Dashboard/Dashboard';

// ASSETS
// import './index.css';

// EXPORTS
export const UserContext = React.createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    ThemeController.setTheme();
    axios({
      method: 'GET',
      url: '/api/v1/user'
    })
      .then(res => {
        setIsAuth(true);
        setUserData(res.data);
      })
      .catch(err => {
        err = new Error('Error fetching user data');
        console.warn(err);
      })
  }, []);


  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Navigate replace to="/" />} />
          <Route path="/signin" exact element={isAuth ? <Navigate replace to="/dashboard" /> : <SignIn />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected user routes with userData */}
          <Route path="/dashboard" exact element={isAuth ? <Dashboard /> : <Navigate replace to="/signin" />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;