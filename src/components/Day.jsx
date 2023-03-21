import React from 'react'
import Appointment from './Appointment';
import styles from "./Day.module.css";
import boxStyles from "./Box.module.css";
import Moment from 'moment';

const slotTime = [
  {"start": "08:30", "end":"09:00"},
  {"start": "09:00", "end":"09:30"},
  {"start": "09:30", "end":"10:00"},
  {"start": "10:00", "end":"10:30"},
  {"start": "10:30", "end":"11:00"},
  {"start": "11:00", "end":"11:30"},
  {"start": "11:30", "end":"12:00"},
  {"start": "12:00", "end":"12:30"},
  {"start": "12:30", "end":"13:00"},
  {"start": "13:00", "end":"13:30"},
  {"start": "13:30", "end":"14:00"},
  {"start": "14:00", "end":"14:30"},
  {"start": "14:30", "end":"15:00"},
  {"start": "15:00", "end":"15:30"},
  {"start": "15:30", "end":"16:00"}];

const Day = (props) => {
  Moment.locale('de');
  const Weekdays = ["Sonntag","Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

  const yyyy = props.date.getFullYear();
  let mm = props.date.getMonth() + 1; // Months start at 0!
  let dd = props.date.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  const formattedToday = dd + '/' + mm + '/' + yyyy;

  return (
    <div>
        <div className={boxStyles.header}>{Weekdays[props.date.getDay()]} {formattedToday}</div>
        {props.data.map((x) => (
          <Appointment key={x.id} name={x.name} start={slotTime[x.slot].start} end={slotTime[x.slot].end} />
        ))}
    </div>
  )
}

export default Day;
