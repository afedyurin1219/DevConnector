const express = require('express');
const mongoos = require('mongoose');
const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// connect to mangodb
mongoos.connect(db).then(() => console.log("MonogoDB connected!")).catch(err => console.log(err));

// first route

app.get('/', (req,res) => res.send('Hello World'));  //says to show 'Hello' on the home page (index '/')

const port = 8020;
app.listen (port, () => console.log(`Sever running on port ${port}`) );

