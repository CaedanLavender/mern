const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

const mongoURL = 'mongodb://mongo:27017/cinema'

mongoose.connect(mongoURL, { useNewUrlParser: true })
.catch((err) => {
   console.error('Connection error', err.message)
})

const db = mongoose.connection;

app.use(express.json());

app.get('/', (req, res) => {
   res.send("Hey there")
})

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Server running on port ' + PORT));