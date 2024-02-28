const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/webtest")
  .then(() => {
    console.log("Connection is setup successfully");
  })
  .catch((err) => {
    console.log("Connection is not setup");
    console.log(err);
});

