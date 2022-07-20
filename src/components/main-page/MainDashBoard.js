import React from "react";
import AppContextProvider from "../context/AppContext";
import MainPage from "./MainPage";

const MainDashBoard = () => {

  return (
    <AppContextProvider >
      <MainPage />
    </AppContextProvider>
  );
};

export default MainDashBoard;
