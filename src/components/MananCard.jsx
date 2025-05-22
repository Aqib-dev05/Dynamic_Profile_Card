import React from "react";
import "../App.css";

function ProfileCard({ data }) {
  return (
    <div className="card">
      {data.image && <img src={data.image} alt="Profile" className="profile-image" />}
      <h3>{data.name}</h3>
      <p><strong>Skills:</strong> {data.skills}</p>
      <p><strong>Education:</strong> {data.education}</p>
    </div>
  );
}

export default ProfileCard;
