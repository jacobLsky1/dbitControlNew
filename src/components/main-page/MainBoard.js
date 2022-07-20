import React,{ useState, useEffect } from 'react';
import Header from '../main/Header';
import MainDashBoard from './MainDashBoard';

const MainBoard = ({setAuth}) => {
  const [name,setname] = useState("")

  useEffect(() =>{
    const getName = async () => {
        try {
          const response = await fetch("https://dbit-control-new.herokuapp.com/dashboard",{
              method: "GET",
              headers: {token : localStorage.token}
          })

          const parsRes = await response.json()
          setname(parsRes.user_name)
      } catch (error) {
          console.error(error.message);
      }
    }
      getName();
  },[]);
  
  return (
    <>
      <Header name={name} setAuth={setAuth} />
      <div className="main">
        <MainDashBoard />
      </div>
    </>
  )
}

export default MainBoard
