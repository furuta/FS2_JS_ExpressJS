const express = require("express"); // import express module
const appServer = express(); // create instance
const port = 8080; // listning port
const bodyParser = require("body-parser"); //import body parser

// Setting
appServer.use(express.static("public"));
appServer.use(bodyParser());

appServer.post("/signup", function(req, res) {
  const data = req.body;
  console.log(data);

  let responseText = `<h1>You inputs</h1>`;
  responseText += `<p>Name:${data.name}</p>`;
  responseText += `<p>Email:${data.email}</p>`;
  responseText += `<p>Password:${data.password}</p>`;
  responseText += `<p>Sex:${data.sex}</p>`;
  responseText += `<button onclick="location.href='/'">Back to top</button>`;
  res.send(responseText);
});

// Starting server
try {
  appServer.listen(port, () => console.log(`Ok on port ${port}`));
} catch (error) {
  console.log("Error on starting server");
  console.log(error);
}
