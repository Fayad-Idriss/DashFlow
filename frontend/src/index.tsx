import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Calendar from './page/Calendar/calendar';
import TasklLine from './page/TaskLine/taskLine';
import Home from './page/Home/home';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Utilisation de createRoot pour React 18
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/taskLine" element={<TasklLine />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

