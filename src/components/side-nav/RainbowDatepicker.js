import React, { useContext, useState } from "react";
import { DatePicker } from "react-rainbow-components";
import { AppContext } from "../context/AppContext";

const RainbowDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { dispatchSelectDate } = useContext(AppContext);



  return (
    <DatePicker
      id="datePicker-1"
      value={selectedDate}
      onChange={(date) => {
        const dateSelected = new Date(date).toLocaleDateString('fr-FR');
        setSelectedDate(date)
        dispatchSelectDate(dateSelected)
      }}
      dateFormat="dd/MM/yyyy"
      label="Select Date For App Data"
      formatStyle="large"
      className="datePicker-data"
    />
  );
}

export default RainbowDatepicker;
