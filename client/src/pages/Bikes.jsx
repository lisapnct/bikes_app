import React, { useState, useEffect } from "react";
import apiHandler from "../apiHandler.js";
import { Link } from "react-router-dom";

import "../styles/Bikes.css";

const Bikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    apiHandler
      .getAll("/bikes")
      .then((apiRes) => setBikes(apiRes.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>all bikes_</h1>
      <div className="bikes-container">
        {bikes.map((bike) => (
          <div key={bike._id} className="bike-card">
            <h3>
              {bike.brand} - ${bike.price}
            </h3>
            <h4>{bike.owner} is the owner</h4>
            <p>
              <b>Color: </b>
              {bike.color} <b> | Size: </b>
              {bike.size}
            </p>
            <Link to={`/bikes/${bike._id}`}>
              <button className="action-btn details">details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
