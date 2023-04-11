import { useEffect, useState } from 'react'

import Appointment from '../Appointment'

import { weekdays, slotTime } from '../../models/temp'
import { APP_ENV, API_URL } from '../../config/config'

import styles from './styles.module.css'

const fetchAppointments = async (day) => {
  if (APP_ENV === 'development') return
  const response = await (
    await fetch(`${API_URL}/appointment/findByDay/${day}`, {
      method: 'GET',
      headers: {
        'access-control-allow-origin': '*',
        accepts: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  )?.json()

  return response
}

const Day = ({ date, data, slots }) => {
  const [appointments, setAppointments] = useState([])

  const yyyy = date.getFullYear()
  const mm = ('0' + (date.getMonth() + 1)).slice(-2)
  const dd = ('0' + date.getDate()).slice(-2)
  const formattedToday = `${dd}.${mm}.${yyyy}`

  useEffect(() => {
    fetchAppointments()
      .then((data) => setAppointments(() => [...Array(data?.length ?? 0).keys()].map((i) => data[i])))
      .catch((e) => {})
  }, [date])

  const getAppointment = (x, empty) => (
    <Appointment empty={empty} key={x.id} app={x} start={slotTime[x.slot].start} end={slotTime[x.slot].end} />
  )

  const getBookedAppointment = (x) => (
    <Appointment
      empty={false}
      key={x.id}
      app={appointments[x.slot]}
      start={slotTime[x.slot].start}
      end={slotTime[x.slot].end}
    />
  )

  return (
    <div>
      <div className={styles.header}>
        {weekdays[date.getDay()]} {formattedToday}
      </div>
      {data.map((x) => {
        if (!slots[x.slot]) return getAppointment(x, true)
        if (appointments[x.slot] != null) return getBookedAppointment(x)

        return getAppointment(x, false)
      })}
    </div>
  )
}

export default Day
