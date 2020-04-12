const mongoose = require('mongoose');
const express = require("express");
const users = require("./routes/api/users");
const workouts = require("./routes/api/workouts");
const exercises = require("./routes/api/exercises")
const bodyParser = require('body-parser');
const passport = require('passport');


const app = express();

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use(passport.initialize());
require('./config/passport')(passport);
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/workouts", workouts);
app.use("/api/exercises", exercises);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));