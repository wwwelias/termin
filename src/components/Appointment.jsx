import React from 'react'
import styles from "./Box.module.css"

const Appointment = (props) => {
  return (
    <div className={styles.app_box}>{props.start} - {props.end}</div>
  )
}

export default Appointment;
