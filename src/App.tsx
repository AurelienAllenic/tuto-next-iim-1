import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import TodoDetail from './components/todo/TodoDetail'; // La nouvelle page pour afficher les détails d'un todo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:id" element={<TodoDetail />} /> {/* Page de détails du Todo */}
      </Routes>
    </Router>
  );
}

export default App;
