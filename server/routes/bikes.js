const express = require("express");
const router = express.Router();
const Bike = require("../models/Bike");
const uploader = require("../config/cloudinary");

router.get("/", async (req, res, next) => {
  Bike.find()
    .then((dbResponse) => {
      console.log(dbResponse);
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

router.get("/:id", (req, res, next) => {
  Bike.findById(req.params.id)
    .then((dbResponse) => {
      console.log(dbResponse);
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

router.post("/", uploader.single("image"), (req, res, next) => {
  const newBike = req.body;
  if (req.file) {
    newBike.image = req.file.path;
  }

  Bike.create(newBike)
    .then((dbRes) => {
      console.log(dbRes);
      res.status(201).json(dbRes);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.patch("/:id", (req, res, next) => {
  const updateValue = req.body;
  Bike.findByIdAndUpdate(req.params.id, updateValue, { new: true })
    .then((bikeDocument) => {
      res.status(200).json(bikeDocument);
    })
    .catch((error) => {
      res.send(500).json(error);
    });
});

router.delete("/:id", (req, res, next) => {
  Bike.findByIdAndDelete(req.params.id)
    .then((deleteDocument) => {
      res.sendStatus(204);
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
