const mongoose = require("mongoose");


const mongoConnection = () => {
    const uri = "mongodb+srv://supermancash:x.psVy33eer7T%40Y@pushnotifications.erof5.mongodb.net/uniecommerce_db?retryWrites=true&w=majority";
    mongoose.connect(uri,
        {useNewUrlParser: true, useUnifiedTopology: true},
        err => {console.log(err)}
    );
// pw: x.psVy33eer7T%40Y

}

module.exports = mongoConnection;