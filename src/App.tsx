import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import TodoDetail from './components/todo/TodoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
