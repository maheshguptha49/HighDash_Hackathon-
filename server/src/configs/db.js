const mongoose = require("mongoose");
require("dotenv").config();

const MongoURL = process.env.MONGO_URL || "http://localhost:27017/";
//const MongoURL = "http://localhost:3032/";

const connect = () =>
  mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
  });

module.exports = connect;
