import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CorrectPage from "./CorrectPage";
import IncorrectPage from "./IncorrectPage";
import TaskTwoPage from "./TaskTwoPage";

function Lab8() {
  return (
    <div>
      <h1>Laboratorium 8</h1>
      <nav>
        <ul>
          <li><Link to="/lab8/correct">Poprawna wersja kawiarni</Link></li>
          <li><Link to="/lab8/incorrect">Niepoprawna wersja kawiarni</Link></li>
          <li><Link to="/lab8/tasktwo">Zadanie nr 2</Link></li>
        </ul>
      </nav>

      {/* Routing podstron */}
      <Routes>
        <Route path="correct" element={<CorrectPage />} />
        <Route path="incorrect" element={<IncorrectPage />} />
        <Route path="tasktwo" element={<TaskTwoPage />} />
      </Routes>
    </div>
  );
}

export default Lab8;
