import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import BookAppointment from './pages/BookAppointment'
import MyAppointments from './pages/MyAppointments'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

import Layout from './layouts/Layout'

import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/termin">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/myappointments" element={<MyAppointments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
