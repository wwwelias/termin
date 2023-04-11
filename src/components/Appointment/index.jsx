import styles from './styles.module.css'

const Appointment = ({ empty, app, start, end }) => {
  const appointmentStyle = empty ? styles?.empty : app?.patient !== null ? styles.booked : styles.available

  return (
    <div onClick={() => !empty && alert('Book appointment')} className={`${styles.app_box} ${appointmentStyle}`}>
      {`${start} - ${end}`}
    </div>
  )
}

export default Appointment
