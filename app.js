const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const db = require('./models/index');
const app = express();

//initialize database
db.sequelize.sync();


//
app.use(bodyParser.json());
//routes
const userRoutes = require('./routes/user.route');
//apis
app.use('/user',userRoutes);

app.listen(config.port,() => {
    console.log(`Listening on port ${config.port}`)
});
