import React from 'react'
import Day from "./Day"
import TimeColumn from "./TimeColumn"
import styles from './CalendarStyles.module.css'
import ArrowLeftIcon from "../assets/arrow-left.svg"
import ArrowRightIcon from "../assets/arrow-right.svg"


const Calendar = (props) => {
  const app = [0, 1, 2, 3, 4];

  return (
    <div className={styles.calendar}>
      <div className={styles.arrow_left}><img src={ArrowLeftIcon} className={styles.arrow_icon}/></div>
      
      <Day className={styles.weekday} appointments={app[0]}/>
      <Day className={styles.weekday} appointments={app[0]}/>
      <Day className={styles.weekday} appointments={app[0]}/>
      <Day className={styles.weekday} appointments={app[0]}/>
      <Day className={styles.weekday} appointments={app[0]}/>
      <div className={styles.arrow_right}><img src={ArrowRightIcon} className={styles.arrow_icon}/></div>

    </div>
  )
}

export default Calendar;
