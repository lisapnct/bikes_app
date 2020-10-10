require("dotenv").config();
const Bike = require("../models/Bike");
const mongoose = require("mongoose");

const bikes = [
  {
    owner: "Lisa",
    color: "white",
    size: "big",
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Bike.create(bikes)
      .then((dbResult) => {
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
