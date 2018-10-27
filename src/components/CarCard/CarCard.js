import React from "react";
import "./CarCard.css";

const CarCard = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.picClicked(props.id)}>
      <img alt={props.model} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Make:</strong> {props.make}
        </li>
        <li>
          <strong>Model:</strong> {props.model}
        </li>
      </ul>
    </div>
  </div>
);

export default CarCard;
