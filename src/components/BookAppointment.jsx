import React, {useState} from "react";
import Calendar from "./Calendar";
import styles from "./BookAppointment.module.css";
import Select from "react-select";

const options = [
  {value: "sven", label: "Dr. Sven Hartmann"},
  {value: "elias", label: "Dr. Elias Wohlgenannt"},
  {value: "joachim", label: "Dr. Joachim Wohlgenannt"},
  {value: "susanne", label: "Dr. Susanne Wohlgenannt"},
  {value: "florian", label: "Dr. Florian Wohlgenannt"}
];

const WorkingSlots = {
  "sven": [[0, 1, 2, 3, 4, 5, 6],  [0, 1, 2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12], [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 4, 5, 6]]
};

const BookAppointment = () => {
  const [selectValue, setSelectValue] = useState(options[0].value);
  const onChange = (event) => {
    setSelectValue(event.value);
  };

    
  return (
    <div className={styles.body}>
      <div className={styles.dropdown}>
        <label>Bitte wählen Sie den gewünschten Arzt aus:</label> <br/>
        <Select
          className={styles.select}
          value={options.value}
          options={options}
          defaultValue={options[0]}
          onChange={onChange}
        />
        <br/>
        <h3>Selected Doctor: {selectValue}</h3>
      </div> 
      <Calendar />
    </div>
  );
};

export default BookAppointment;
