import React from "react";
import apiHandler from "../apiHandler.js";
import { Link } from "react-router-dom";

import "../styles/Bikes.css";

class Bikes extends React.Component {
  state = {
    bikes: [],
  };

  componentDidMount() {
    apiHandler
      .getAll("/bikes")
      .then((apiRes) => {
        // console.log(apiRes);
        this.setState({
          bikes: apiRes.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>all bikes_</h1>
        <div className="bikes-container">
          {this.state.bikes.map((bike) => (
            <div key={bike._id} className="bike-card">
              <h3>
                {bike.brand} - ${bike.price}
              </h3>
              <p>{bike.owner} is the owner</p>
              <p>
                Color: {bike.color} | Size: {bike.size}
              </p>
              <Link to={`/bikes/${bike._id}`}>
                <button className="action-btn details">details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Bikes;
