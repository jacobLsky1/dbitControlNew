import React from "react";
import { nanoid } from "nanoid";

const InvalidData = ({invalidData}) => {
    return (
        <table className="table invalid-data">
            {  
                invalidData.length > 0 
                ? (
                    <>
                        <thead className="thead invalid-data-header">
                            <tr>
                                <th className="th th-time">Time</th>
                                <th className="th th-valid">Valid Status</th>
                                <th className="th th-dType">device type</th>
                                <th className="th th-countryC">Country Code</th>
                                <th className="th th-countryA">Country Area</th>
                                <th className="th th-IP">IP</th>
                                <th className="th">User Agent</th>
                            </tr>
                        </thead>
                        <tbody className="invalid-data-tbody">
                            {
                                invalidData.map((data) => (
                                    <tr className="tr" key={nanoid()}>
                                        {
                                            data.length > 0 ? 
                                            <>
                                                {
                                                    data.split('|').map((value, index) => (
                                                        <td key={nanoid()} className={'td column'+(index+1)}>{value}</td>
                                                    ))
                                                }
                                            </>
                                            : <></>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </>
                ) : <></> 
            }
        </table>
    )
}

export default InvalidData;