import React, { useState, useEffect } from 'react'

import Day from '../Day'

import ArrowLeftIcon from '../../assets/svgs/arrow-left.svg'
import ArrowRightIcon from '../../assets/svgs/arrow-right.svg'
import data from '../../assets/data/dummyTermin.json'

import styles from './styles.module.css'

const MS_PER_DAY = 86_400_000
const DAYS_PER_WEEK = 7

const Calendar = (props) => {
  const [date, setDate] = useState(new Date(Date.now() - MS_PER_DAY))

  const changeDate = (days) => {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)
    return newDate
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.arrow_left} onClick={() => setDate(changeDate(-7))}>
        <img src={ArrowLeftIcon} className={styles.arrow_icon} />
      </div>
      {[...Array(5).keys()].map((_, i) => (
        <Day key={i} className={styles.weekday} slots={props.workingSlots[i]} date={changeDate(i)} data={data} />
      ))}
      <div className={styles.arrow_right} onClick={() => setDate(changeDate(7))}>
        <img src={ArrowRightIcon} className={styles.arrow_icon} />
      </div>
    </div>
  )
}

export default Calendar
