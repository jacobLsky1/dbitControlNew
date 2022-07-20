import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import Loader from '../main/Loader';
import { getData } from '../server/DB';
import SummeryData from '../tables/summery-data/SummeryData';
import UserData from '../tables/user-data/UserData';

const MainContent = () => {
    const { selectAppData } = useContext(AppContext);
    const { selectedDate } = useContext(AppContext);
    const [ data, setData ] = useState(true);
    const [summeryData, setSummeryData] = useState(false);
    const [usersData, setUserData] = useState(false);
    const [showData, setShowData] = useState(false);

    const handleSummeryData = () => {
      setSummeryData(true);
      setUserData(false);
    }

    const handleUsersData = () => {
      setSummeryData(false);
      setUserData(true);
    }
  
    useEffect(() => {
      setData(false);
      setSummeryData(false)
      setUserData(false)
      if (!(selectAppData === 'app') && selectedDate) {
        setShowData(true);
        var date = selectedDate.split('/');
        const fetchData = async () => {
            const response = await getData(selectAppData, date[2], date[1], date[0]);
            setData(response);
        }
        fetchData();
      }

    }, [selectAppData,selectedDate])
  


    return (
      <div className='tables-container'>
        {
          !showData ? <></> :
          <>
            {
              !data ? <Loader />
              :  
              (data.allAppSummery.length > 0  || data.allAppUsers.length > 0)  
              ? (
                <div  className='summeryBtn-usersBtn'>
                  <div className={summeryData ? 'btn-activated' : ''} onClick={handleSummeryData}>Summery Data</div>
                  <div className={usersData ? 'btn-activated' : ''} onClick={handleUsersData}>Users Data</div>
                </div>
              ) : <div  className='summeryBtn-usersBtn'>No data recived</div>
            }
            {
              !summeryData ? <></>
              : <SummeryData summeryData={data.allAppSummery} />
            }
            {
              !usersData ? <></>
              : <UserData userData={data.allAppUsers} />
            }
          </>
        }
      </div>
    )

}

export default MainContent;

// <UserData userData={data.allAppUsers} />