import React, { useState } from 'react'
import Calendar from '../../components/Calendar'
import Select from 'react-select'

import styles from './styles.module.css'

const options = [
  { value: 'sven', label: 'Dr. Sven Hartmann' },
  { value: 'elias', label: 'Dr. Elias Wohlgenannt' },
  { value: 'joachim', label: 'Dr. Joachim Wohlgenannt' },
  { value: 'susanne', label: 'Dr. Susanne Wohlgenannt' },
  { value: 'florian', label: 'Dr. Florian Wohlgenannt' },
]

const workingSlots = {
  sven: [
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
  ],
  elias: [
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
  ],
  joachim: [
    [true, true, true, true, true, false, false, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, false, false, true, true, false, false, false],
  ],
  susanne: [
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, false, false, false, true, true, true],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  ],
  florian: [
    [true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    [true, true, true, true, true, true, false, false, false, true, true, true, true, true],
    [false, false, false, false, false, false, false, false, false, true, true, true, true, true],
    [false, false, true, true, true, true, true, false, false, true, true, false, false, false],
    [false, false, false, false, true, true, true, true, true, false, false, false, false, false],
  ],
}

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
