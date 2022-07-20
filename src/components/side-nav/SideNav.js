import React from "react";
import DropDownPicker from './DropDownPicker'
import RainbowDatepicker from './RainbowDatepicker'

const SideNav = () => {
  
  return (
    <div className='sidenav'>
      {/* <div className='sidNavCard'> */}
        <div className='app-picker__container'>
          <DropDownPicker />
        </div>
        <div className='datePicker'>
          <RainbowDatepicker />
        {/* </div> */}
      </div>

      {/* <div className='rows'>
        <div className='row addAppButton'>
          <button type="secondary">Add App</button>
        </div>
      </div> */}
    </div>
  )
}

export default SideNav;
