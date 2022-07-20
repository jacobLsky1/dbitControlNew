import React from "react";

const Header = ({name,setAuth}) => {

    const logout =(e) =>{
        e.preventDefault();
        localStorage.removeItem("token")
        setAuth(false);
      }
    return (
        <div className="header">
            <h1 className="text-center">Welcome to Dbit Apps {name}</h1>
            <div className="logout-button">
                <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
            </div>
        </div>
)
}

export default Header;