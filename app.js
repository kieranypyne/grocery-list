const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const tasks = require('./routes/tasks');
const index = require('./routes/index');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task-list');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/tasks', tasks);

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`)
