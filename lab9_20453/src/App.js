import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Lab7 from "./components/lab7/lab7";
import Lab8 from "./components/lab8/lab8";
import Lab9 from "./components/lab9/lab9";
import NotFound from "./components/NotFound";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab7" element={<Lab7 />} />
          <Route path="/lab8/*" element={<Lab8 />} />
          <Route path="/lab9/*" element={<Lab9 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
