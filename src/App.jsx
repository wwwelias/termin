import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import BookAppointment from "./components/BookAppointment";
import MyAppointment from "./components/MyAppointment";
import NoPage from "./components/NoPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router forceRefresh>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="bookappointment" element={<BookAppointment />} />
            <Route path="myappointments" element={<MyAppointment />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
