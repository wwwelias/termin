import React from 'react'
import Appointment from './Appointment';
import styles from "./Day.module.css";
import boxStyles from "./Box.module.css";


const Day = (props) => {
  return (
    <div>
        <div className={boxStyles.header}>Monday 19.02.1021</div>
        <Appointment start="08:00" end="09:00" />
    </div>
  )
}

export default Day;
