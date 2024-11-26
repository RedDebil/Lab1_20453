import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#f4f4f4", padding: "10px", marginBottom: "20px" }}>
      <ul style={{ display: "flex", listStyleType: "none", gap: "15px", margin: 0 }}>
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/lab7">Lab 7</Link></li>
        <li><Link to="/lab8/main">Lab 8</Link></li>
        <li><Link to="/lab9">Lab 9</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
