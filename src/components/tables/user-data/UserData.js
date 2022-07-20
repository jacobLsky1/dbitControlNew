import React, { useState } from "react";
import { nanoid } from "nanoid";
import ReactPaginate from 'react-paginate';

const UserData = ({userData}) => {
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 50
    const pagesVisited = pageNumber * usersPerPage

    const displayUsers = userData
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <tr className="tr" key={nanoid()}>
                    <td className="td-date">{user.date}</td>
                    <td className="td-time">{user.time}</td>
                    <td className="td-valid">{user.valid_status}</td>
                    <td className="td-device">{user.device_type}</td>
                    <td className="td-country_code">{user.country_code}</td>
                    <td className="td-region_name">{user.region_name}</td>
                    <td className="td-ip">{user.ip_address}</td>
                    <td className="td-agent">{user.user_agent}</td>
                </tr>
            )

        })
    const pageCount = Math.ceil(userData.length / usersPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }
    
    return (
        <>
            <table className="table user-data__table">
                <thead className="thead">
                    <tr className="tr">
                        <th className="th column1">date</th>
                        <th className="th column2">time</th>
                        <th className="th column3">valid status</th>
                        <th className="th column4">device type</th>
                        <th className="th column5">country code</th>
                        <th className="th column6">reegion name</th>
                        <th className="th column7">ip address</th>
                        <th className="th column8">user agent</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {displayUsers}
                </tbody>
            </table>
            <ReactPaginate 
                previousLabel={"previous"}
                nextLabel={"next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </>
    )
};

export default UserData;