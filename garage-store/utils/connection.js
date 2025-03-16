const mongoose = require('mongoose');
const dbURI = "mongodb://localhost:27017/garage-store";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>console.log("MongoDB Connected"))
    .catch(err =>console.error("DB Connection Error: ", err));

module.exports = mongoose;

