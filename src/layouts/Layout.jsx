import { Outlet, NavLink } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  return (
    <>
      <header>
        <h1 className="nav-title">
          Arztpraxis <span style={{ color: 'green' }}>immaGsund</span>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={(state) => (state.isActive ? 'active' : 'inactive')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookappointment" className={(state) => (state.isActive ? 'active' : 'inactive')}>
                Book Appointment
              </NavLink>
            </li>
            <li>
              <NavLink to="/myappointments" className={(state) => (state.isActive ? 'active' : 'inactive')}>
                My Appointments
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default Layout
