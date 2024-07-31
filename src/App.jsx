import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CalendarComponent from './CalendarComponents';
import Picker from './DatePicker';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/embed-calendar" element={<CalendarComponent />} />
        <Route path="/embed-picker" element={<Picker />} />
        <Route path="/" element={
          <div>
            <h1>Main App</h1>
            <div>
              <a href='/embed-calendar'><button>Calendar</button></a>
              <a href='/embed-picker'><button>Picker</button></a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
