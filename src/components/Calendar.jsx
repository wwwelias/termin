import React, {useState} from 'react'
import Day from "./Day"
import TimeColumn from "./TimeColumn"
import styles from './CalendarStyles.module.css'
import ArrowLeftIcon from "../assets/arrow-left.svg"
import ArrowRightIcon from "../assets/arrow-right.svg"
import data from '../assets/dummyTermin.json'

const Calendar = (props) => {
  const app = [0, 1, 2, 3, 4];
  var startDate = new Date();
  startDate = new Date(startDate.setDate(startDate.getDate() - (startDate.getDay() - 1)))
  const [date, setDate] = useState(startDate);
  const changeDate = (days) => {
    let d = new Date;
    return new Date(d.setDate(date.getDate() + days));
  };
  
  return (
    <div className={styles.calendar}>
      <div className={styles.arrow_left} onClick={() => setDate(changeDate(-7))}><img src={ArrowLeftIcon} className={styles.arrow_icon}/></div>
      <Day className={styles.weekday} date={changeDate(0)} data={data}/>
      <Day className={styles.weekday} date={changeDate(1)} data={data}/>
      <Day className={styles.weekday} date={changeDate(2)} data={data}/>
      <Day className={styles.weekday} date={changeDate(3)} data={data}/>
      <Day className={styles.weekday} date={changeDate(4)} data={data}/>
      <div className={styles.arrow_right} onClick={() => setDate(changeDate(7))}><img src={ArrowRightIcon} className={styles.arrow_icon}/></div>
    </div>
  )
}

export default Calendar;
