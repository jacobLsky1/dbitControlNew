import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [selectAppData, dispatchSelectAppData] = useState('app');
    const [selectedDate, dispatchSelectDate] = useState(null);

    return (
        <AppContext.Provider 
          value={
                { 
                    selectAppData, dispatchSelectAppData,
                    selectedDate, dispatchSelectDate 
                }
            }
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;