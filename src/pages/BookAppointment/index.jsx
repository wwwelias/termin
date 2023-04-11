import { useState } from 'react'
import Calendar from '../../components/Calendar'
import Select from 'react-select'

import styles from './styles.module.css'

import { options, workingSlots } from '../../models/temp'

const BookAppointment = () => {
  const [selectValue, setSelectValue] = useState(options[0].value)
  const onChange = (event) => {
    setSelectValue(event.value)
  }

  return (
    <div className={styles.body}>
      <div className={styles.dropdown}>
        <label>Bitte wählen Sie den gewünschten Arzt aus:</label> <br />
        <Select
          className={styles.select}
          value={options.value}
          options={options}
          defaultValue={options[0]}
          onChange={onChange}
        />
        <br />
        <h3>Selected Doctor: {selectValue}</h3>
      </div>
      <Calendar workingSlots={workingSlots[selectValue]} />
    </div>
  )
}

export default BookAppointment
