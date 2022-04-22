// MODULES
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ThemeController } from './Components/ThemeController/ThemeController';
// COMPONENTS
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/Auth/SignIn';

// ASSETS
// import './index.css';

// EXPORTS
export const UserContext = React.createContext();

function App() {
  useEffect(() => {
    ThemeController.setTheme();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Navigate replace to="/" />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;