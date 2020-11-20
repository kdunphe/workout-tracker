const apiRoutes = require("express").Router();
const db = require("../models");

apiRoutes.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
});

apiRoutes.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
});

apiRoutes.post("/workouts", (req, res) => {
    db.Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
});

apiRoutes.post("/workouts/range", (req, res) => {
    db.Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        })
})

apiRoutes.put("/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = apiRoutes;