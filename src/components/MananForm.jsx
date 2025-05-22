import React, { useState } from "react";
import "../App.css";

function ProfileForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    education: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add User Info</h2>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="skills" placeholder="Skills" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input type="Age" placeholder="Age" onChange={handleChange} required />
        <input name="education" placeholder="Education" onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
