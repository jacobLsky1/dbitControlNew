import React from "react";
import InvalidData from "./InvalidData";
import Summery from "./Summery";

const SummeryData = ({summeryData}) => {

    return (
        <div className="summery-data">
            <InvalidData invalidData={summeryData[0].invalid_with_data} />
            <Summery summery={summeryData[0]} />
        </div>
    )
}

export default SummeryData;