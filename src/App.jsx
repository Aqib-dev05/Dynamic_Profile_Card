/* import CardParent from "./components/CardParent.jsx";

function App() {


  return (
    <>
    <CardParent/>
    </>
  )
}

export default App
 */
import React, { useState } from "react";
import ProfileForm from "./components/MananForm";
import ProfileCard from "./components/MananCard";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddProfile = (data) => {
    setProfiles([...profiles, data]);
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <h1>User Profiles</h1>
      <button className="open-form-btn" onClick={() => setShowForm(true)}>
        Add Profile
      </button>

      {showForm && <ProfileForm onSubmit={handleAddProfile} />}

      <div className="card-grid">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
