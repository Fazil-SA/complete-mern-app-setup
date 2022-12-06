const express = require('express')
const router = express.Router()
// const Workout = require('../models/workoutModel') 
const {getWorkouts,getWorkout,createWorkout,deleteWorkout, updateWorkout} = require('../controllers/workoutController')

//Get all workouts
router.get('/',getWorkouts)

//post a new workout
router.post('/', createWorkout)

//get a single workout
router.get('/:id',getWorkout)

//delete a workout
router.delete("/:id",deleteWorkout)
//update a workout
router.patch('/:id',updateWorkout)

module.exports = router
