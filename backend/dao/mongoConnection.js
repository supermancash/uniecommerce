const mongoose = require("mongoose");
const config = require("../config/config");


const mongoConnection = () => {
    mongoose.connect(config.mongoUri,
        {useNewUrlParser: true, useUnifiedTopology: true},
        err => {console.log(err)}
    );
// pw: x.psVy33eer7T%40Y

}

module.exports = mongoConnection;