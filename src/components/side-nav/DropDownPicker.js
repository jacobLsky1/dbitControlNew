import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { allApps } from "../server/DB";
import { nanoid } from "nanoid";

const DropDownPicker = () => {
  const { selectAppData, dispatchSelectAppData } = useContext(AppContext);
  const [ apps, setApps ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const data = await allApps();
        setApps(data);
    }
    fetchData();
  }, []);
  
  return (
    <>
      <label>Select App</label>
      <select value={selectAppData} onChange={(e) => {
            dispatchSelectAppData(e.target.value)
      }} >
          <option key={'app'} value={'app'}>app</option>
        {  
          !apps ? <></> 
          :  apps.map(app => <option key={nanoid()} value={app.app_name}>{app.app_name}</option>)
        }
      </select>
      

      <p>{selectAppData} App selected</p> 
    </>
  )
}

export default DropDownPicker;