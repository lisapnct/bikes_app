import React, { useState, useEffect } from "react";
import apiHandler from "../apiHandler.js";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

const OneBike = (props) => {
  const [bike, setBike] = useState(null);

  useEffect(() => {
    apiHandler
      .getOne("/bikes/", props.match.params.id)
      .then((apiRes) => setBike(apiRes.data))
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  const handleDelete = () => {
    apiHandler
      .deleteOne("/bikes/", bike._id)
      .then(() => {
        props.history.push("/bikes");
      })
      .catch((err) => console.log(err));
  };

  if (!bike) {
    return <div>Loading...</div>;
  }
  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <div>
        <h1>{bike.owner}'s bike</h1>
        <img src={bike.image} alt="owner-bike-img" />
        <h3>Price: ${bike.price}</h3>
        <button className="action-btn">
          <Link to={`/bikes/${bike._id}/edit`}>edit</Link>
        </button>
        <button className="action-btn" onClick={handleDelete}>
          delete
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default OneBike;
