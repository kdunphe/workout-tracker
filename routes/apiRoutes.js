const apiRoutes = require("express").Router();
const db = require("../models/workout");

apiRoutes.get("/api/workouts", (req, res) => {
  db.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

apiRoutes.get("/api/workouts/range", (req, res) => {
  db.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

apiRoutes.post("/api/workouts", (req, res) => {
  db.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = apiRoutes;