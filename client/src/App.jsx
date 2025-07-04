import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/company/:id" element={<CompanyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;