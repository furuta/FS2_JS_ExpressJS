const express = require("express"); // import express module
const appServer = express(); // create instance
const port = 8080; // listning port

appServer.get("/", (req, res) => res.send("Hello World")); // routing for root endpoint

try {
  appServer.listen(port, () => console.log(`Ok on port ${port}`)); // start reception of server
} catch (error) {
  console.log("Error on starting server");
  console.log(error);
}
