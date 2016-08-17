const express = require('express');
const router = express.Router();
const TaskModel = require('../models/task.js')

const tasks = { };

router.get('/', function(req, res, next) {
  TaskModel.find((err, tasks) => {
    res.render('index', {
      tasks: tasks
    });
    // res.json(tasks);
  })
});

router.post('/', function(req, res, next) {
  const task = req.body.task;
  const model = new TaskModel({
    text: req.body.text,
    amount: req.body.amount
  });
  model.save(function(err, model){
    res.redirect('/tasks');
  });
});

module.exports = router;
