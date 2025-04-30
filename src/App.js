import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import BookTable from './pages/BookTable';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-table" element={<BookTable />} />
          {/* Optional 404 route */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;