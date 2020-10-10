import React from "react";
import FormBike from "../components/FormBike";

const EditBike = (props) => {
  return (
    <div>
      <h1>edit this bike_</h1>
      <FormBike action="edit" id={props.match.params.id} />
    </div>
  );
};

export default EditBike;
