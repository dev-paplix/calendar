import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CalendarComponent from './CalendarComponents';
import Picker from './DatePicker';

function MainApp() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main App</h1>
      <div>
        <button onClick={() => navigate('/embed-calendar')}>Calendar</button>
        <button onClick={() => navigate('/embed-picker')}>Picker</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/embed-calendar" element={<CalendarComponent />} />
      <Route path="/embed-picker" element={<Picker />} />
      <Route path="/" element={<MainApp />} />
    </Routes>
  );
}

export default App;
