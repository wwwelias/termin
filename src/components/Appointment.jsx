import React from 'react'
import styles from "./Box.module.css"

const Appointment = (props) => {
  var extraClass = (props.name == null) ? styles.available : styles.booked; 
  return (
    <div className={`${styles.app_box} ${extraClass}`}>{props.start} - {props.end}</div>
  )
}

export default Appointment;
