const app = require('./app');
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONMONGOOSE)
    .then(app.listen(3333, (req, res) => console.log('http://localhost:3333')))
    .catch((e) => console.log(e));
