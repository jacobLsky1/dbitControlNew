import React from "react";
import { nanoid } from "nanoid";

const Summery = ({summery}) => {

    return (
        <table className="summery">
            <thead className="thead summery-header">
                <tr>
                    <th className="th">Date</th>
                    <th className="th">Amount Of Entries</th>
                    <th className="th">Number of Mobile entries</th>
                    <th className="th">Number of desktop entries</th>
                    <th className="th">Entries By Country</th>
                </tr>
            </thead>
            <tbody className="summery-tbody">
                <tr>
                    <td>{summery.date}</td>
                    <td className="grayColor">{summery.amount_of_entries}</td>
                    <td>{summery.desktop_entries_amount}</td>
                    <td className="grayColor">{summery.mobile_entries_amount}</td>
                    <td className="td-entries_by_country">
                        {
                            summery.entries_by_country.map(country => (
                                <div key={nanoid()}>{country}</div>
                            ))
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Summery;