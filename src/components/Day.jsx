import React, { useEffect, useState } from "react";
import Appointment from "./Appointment";
import styles from "./Day.module.css";
import boxStyles from "./Box.module.css";
import Moment from "moment";

const slotTime = [
  { start: "08:30", end: "09:00" },
  { start: "09:00", end: "09:30" },
  { start: "09:30", end: "10:00" },
  { start: "10:00", end: "10:30" },
  { start: "10:30", end: "11:00" },
  { start: "11:00", end: "11:30" },
  { start: "11:30", end: "12:00" },
  { start: "12:00", end: "12:30" },
  { start: "12:30", end: "13:00" },
  { start: "13:00", end: "13:30" },
  { start: "13:30", end: "14:00" },
  { start: "14:00", end: "14:30" },
  { start: "14:30", end: "15:00" },
  { start: "15:00", end: "15:30" },
  { start: "15:30", end: "16:00" },
];

const Weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

async function fetchAppointments(day) {
  const response = await fetch(
    "http://10.115.2.1:8080/appointment/findByDay/" + day,
    {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        accepts: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const appointments = await response.json();
  return appointments;
}

const Day = (props) => {
  const [appointments, setAppointments] = useState([]);

  Moment.locale("de");

  const yyyy = props.date.getFullYear();
  let mm = props.date.getMonth() + 1; // Months start at 0!
  let dd = props.date.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = dd + "." + mm + "." + yyyy;

  useEffect(() => {
    fetchAppointments(yyyy + "-" + mm + "-" + dd).then((json) => {
      let occupied = new Array(slotTime.length).fill(null);
      for (let i = 0; i < json.length; i++) {
        let obj = json[i];
        occupied[obj.slot] = obj;
      }
      setAppointments(occupied);
    });
  }, [props.date]);

  const getAppointment = (x, empty) => {
    return (
      <Appointment
        empty={empty}
        key={x.id}
        app={x}
        start={slotTime[x.slot].start}
        end={slotTime[x.slot].end}
      />
    );
  };

  const getBookedAppointment = (x) => {
    return (
      <Appointment
        empty={false}
        key={x.id}
        app={appointments[x.slot]}
        start={slotTime[x.slot].start}
        end={slotTime[x.slot].end}
      />
    );
  };

  return (
    <div>
      <div className={boxStyles.header}>
        {Weekdays[props.date.getDay()]} {formattedToday}
      </div>
      {props.data.map((x) => {
        if (props.slots[x.slot]) {
          if (appointments[x.slot] != null) {
            return getBookedAppointment(x);
          }
          return getAppointment(x, false);
        }
        return getAppointment(x, true);
      })}
    </div>
  );
};

export default Day;
