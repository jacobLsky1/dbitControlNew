import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MainBoard from "./components/main-page/MainBoard";
import './styles/styles.scss';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) =>{
    setIsAuthenticated(boolean);
  }

  
  useEffect(() => {
    const isAuth =  async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/verify",{
          method: "GET",
          headers: {token : localStorage.token}
        })
        const parsRes = await response.json()
       
        parsRes===true ? setIsAuthenticated(true) : setIsAuthenticated(false)
      } catch (error) {
        console.error(error.message);
      }
    }
    isAuth()
  },[])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to="/login" />} />
        <Route
          exact
          path="/login"
          element={
            !isAuthenticated ? (
              <Login props setAuth={setAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/register"
          element={
            !isAuthenticated ? <Register props setAuth={setAuth}/> : <Navigate to="/login" />
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            isAuthenticated ? <MainBoard props setAuth={setAuth}/> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
