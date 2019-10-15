const express = require("express"); // import express module
const appServer = express(); // create instance
const port = 8080; // listning port

// Routing
appServer.get("/", function(req, res) {
  res.send("Hello World");
});

appServer.post("/login", function(req, res) {
  res.send("Welcome XXXXX!!");
});

appServer
  .route("/user")
  .get(function(req, res, next) {
    res.send("Show user infomation");
  })
  .post(function() {
    res.send("Create user");
  })
  .put(function() {
    res.send("Modify user infomation");
  })
  .delete(function() {
    res.send("Delete user");
  });

// Starting server
try {
  appServer.listen(port, () => console.log(`Ok on port ${port}`));
} catch (error) {
  console.log("Error on starting server");
  console.log(error);
}
