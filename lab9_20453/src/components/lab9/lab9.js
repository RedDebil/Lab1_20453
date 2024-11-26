import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Interests from "./Interests";
import FavoriteGame from "./FavoriteGame";
import ContactForm from "./ContactForm";

function Lab9() {
  return (
    <div>
      <h1>Laboratorium 9</h1>
      <nav>
        <ul>
          <li><Link to="/lab9/about-me">O mnie</Link></li>
          <li><Link to="/lab9/interests">Moje zainteresowania</Link></li>
          <li><Link to="/lab9/favorite-game">Ulubiona gra</Link></li>
          <li><Link to="/lab9/contact">Kontakt</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="about-me" element={<AboutMe />} />
        <Route path="interests" element={<Interests />} />
        <Route path="favorite-game" element={<FavoriteGame />} />
        <Route path="contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default Lab9;
