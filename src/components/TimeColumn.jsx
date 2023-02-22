import React from 'react'
import styles from "./TimeColumn.module.css";
import boxStyles from "./Box.module.css";
const times = []
for (let i = 8; i <= 16; i++){
    let time = (i < 10) ? "0" + i.toString() + ":00" : i.toString() + ":00";
    times.push({id: i, t: time})
}

const TimeColumn = () => {

    
  return (
    <div className={styles.times}>
        <div className={boxStyles.header}>#</div>
        {times.map(time => {
        return (
            <div key={time.id} className={boxStyles.app_box}>{time.t}</div>
        )
        })}
    </div>
 
  )
}

export default TimeColumn;