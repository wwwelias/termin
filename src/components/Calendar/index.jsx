import { useState } from 'react'

import Day from '../Day'

import ArrowLeftIcon from '../../assets/svgs/arrow-left.svg'
import ArrowRightIcon from '../../assets/svgs/arrow-right.svg'
import data from '../../assets/data/dummyTermin.json'

import styles from './styles.module.css'

const MS_PER_DAY = 86_400_000
const DAYS_PER_WEEK = 7

const Calendar = (props) => {
  const [date, setDate] = useState(Date.now() - MS_PER_DAY)

  return (
    <div className={styles.calendar}>
      <div className={styles.arrow_left} onClick={() => setDate((prevDate) => prevDate - MS_PER_DAY * DAYS_PER_WEEK)}>
        <img src={ArrowLeftIcon} className={styles.arrow_icon} />
      </div>
      {[...Array(5).keys()].map((weekDay) => {
        return (
          <Day
            key={weekDay}
            className={styles.weekday}
            slots={props.workingSlots[weekDay]}
            date={new Date(date + MS_PER_DAY * weekDay)}
            data={data}
          />
        )
      })}
      <div className={styles.arrow_right} onClick={() => setDate((prevDate) => prevDate + MS_PER_DAY * DAYS_PER_WEEK)}>
        <img src={ArrowRightIcon} className={styles.arrow_icon} />
      </div>
    </div>
  )
}

export default Calendar
