import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import RequestTutoring from './pages/RequestTutoring';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/request-tutoring" element={<RequestTutoring />} />
      </Routes>
    </Router>
  );
}

export default App;
