const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type."
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name."
            },
            distance: {
              type: Number
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter the duration."
            },
            weight: {
                type: Number
            },
            reps: {
              type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;