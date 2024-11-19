import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskTwoPage from "./TaskTwoPage";
import IncorrectPage from "./IncorrectPage";
import CorrectPage from "./CorrectPage";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/incorrect">Niepoprawna wersja</Link>
          </li>
          <li>
            <Link to="/correct">Poprawna wersja</Link>
          </li>
          <li>
            <Link to="/task-two">Zadanie nr 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/incorrect" element={<IncorrectPage />} />
        <Route path="/correct" element={<CorrectPage />} />
        <Route path="/task-two" element={<TaskTwoPage />} />
      </Routes>
    </Router>
  );
}
