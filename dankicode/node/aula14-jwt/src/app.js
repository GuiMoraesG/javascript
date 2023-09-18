require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONMONGOOSE).catch((e) => console.log(e));

app.use(express.json());
app.get('/', (req, res) => res.send('oi'));

module.exports = app;
