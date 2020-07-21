const express = require("express")
const Workout = require("./workout-tracker/models/workout.js")
const Stats = require("./workout-tracker/models/stats.js")
const Exercise = require('./workout-tracker/models/exercise.js')
const router = express.Router()


module.exports = function(app) {
    // Called when "Countinue Workout" or "new Workout" is clicked in index.html
    app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // Not quite sure what this is used for yet ....
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  };




module.exports = router;