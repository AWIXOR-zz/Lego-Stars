import React from "react";
import "./card.style.css";
export const Card = props => (
  <div className="card-container">
    <img
      alt="user"
      src={`https://randomuser.me/api/portraits/lego/${props.user.id - 1}.jpg`}
    />
    <h2>{props.user.name}</h2>
    <p className="p">{props.user.email}</p>
  </div>
);
