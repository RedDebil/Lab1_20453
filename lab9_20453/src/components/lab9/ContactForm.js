import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Dziękujemy za kontakt!");
  };

  return (
    <div>
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Wiadomość:</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default ContactForm;
