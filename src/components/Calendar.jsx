import React, { useState } from "react";
import Day from "./Day";
import TimeColumn from "./TimeColumn";
import styles from "./CalendarStyles.module.css";
import ArrowLeftIcon from "../assets/arrow-left.svg";
import ArrowRightIcon from "../assets/arrow-right.svg";
import data from "../assets/dummyTermin.json";
import { useEffect } from "react";

const Calendar = (props) => {
  const [actualDate, setActualDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const app = [0, 1, 2, 3, 4];
    let startDate = new Date();
    startDate = new Date(
      startDate.setDate(startDate.getDate() - (startDate.getDay() - 1))
    );
    setDate(startDate);
    setIsLoading(false);
  }, []);

  const changeDate = (days) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  };

  const getCalendar = () => {
    return (
      <div className={styles.calendar}>
        <div
          className={styles.arrow_left}
          onClick={() => setDate(changeDate(-7))}
        >
          <img src={ArrowLeftIcon} className={styles.arrow_icon} />
        </div>
        <Day
          slots={props.workingSlots[0]}
          className={styles.weekday}
          date={changeDate(0)}
          data={data}
        />
        <Day
          slots={props.workingSlots[1]}
          className={styles.weekday}
          date={changeDate(1)}
          data={data}
        />
        <Day
          slots={props.workingSlots[2]}
          className={styles.weekday}
          date={changeDate(2)}
          data={data}
        />
        <Day
          slots={props.workingSlots[3]}
          className={styles.weekday}
          date={changeDate(3)}
          data={data}
        />
        <Day
          slots={props.workingSlots[4]}
          className={styles.weekday}
          date={changeDate(4)}
          data={data}
        />
        <div
          className={styles.arrow_right}
          onClick={() => setDate(changeDate(7))}
        >
          <img src={ArrowRightIcon} className={styles.arrow_icon} />
        </div>
      </div>
    );
  };
  return isLoading ? <div>loading</div> : getCalendar();
};

export default Calendar;
