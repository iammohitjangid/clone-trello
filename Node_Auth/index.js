const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//import routes
const authroutes = require('./routes/auth');

dotenv.config();
// Connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true }, ()=> console.log("CONNECTED TO DB"));

// MiddleWare
app.use(express.json());


// Routes middle_ware
app.use('/api/user', authroutes);


app.listen(8000, ()=> console.log("Server is Up and running"));