const express = require("express"); // import express module
const appServer = express(); // create instance
const port = 8080; // listning port
const bodyParser = require("body-parser"); //import body parser
const fs = require("fs");

// Setting
appServer.use(express.static("public"));
appServer.use(bodyParser());
const docForClient = "data/client.json";

// dummy database
var users = {
  test: { password: "test" },
  test1: { password: "test1" }
};

// Routing
//Normally, name and password are not passed with the GET method, but implemented according to the sample of the task
appServer.get(
  "/data",
  function checkIfAllowed(req, res, next) {
    let data = req.query;
    console.log(data);

    data.isAllowed = false;
    if (users[data.name]) {
      data.isAllowed = users[data.name].password == data.password; // isAllowed is set
    }
    if (!data.isAllowed) {
      // User is not allowed, continue to other area, e.g. signup
      next("route");
    } else {
      next();
    }
  },
  function getRestrictedContent(req, res, next) {
    fs.readFile(docForClient, "utf8", function(err, data) {
      if (err) return next(err);
      res.json(JSON.parse(data));
    });
  }
);

// Error handling
appServer.use(function(req, res, next) {
  res.status(404).send("File Not Found");
});

// Starting server
try {
  appServer.listen(port, () => console.log(`Ok on port ${port}`));
} catch (error) {
  console.log("Error on starting server");
  console.log(error);
}
