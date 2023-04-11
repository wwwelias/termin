import React from "react";
import styles from "./Box.module.css";

const Appointment = (props) => {
  let extraClass = styles.available;
  let unclickable = false;
  let text = props.start + " - " + props.end;
  if (props.empty) {
    extraClass = styles.empty;
    unclickable = true;
    text = "-";
  } else if (props.app.patient != null) {
    extraClass = styles.booked;
    unclickable = true;
  }

  const book = () => {
    if (unclickable) return;
    alert("Book appointment");
  };

  return (
    <div onClick={book} className={`${styles.app_box} ${extraClass}`}>
      {text}
    </div>
  );
};

export default Appointment;
