// import dependencies
const express = require("express");
// const path = require("path");

// initialize server and port number;
const app = express();

const PORT = 3000;

// set up express middleware (.json), urlencoded
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// import routes from other files and tell app to use them
require("./app/routing/apiRoutes")(app);
// app / routing / apiRoutes.js
// ABOVE IS SAME AS THIS 
// const apiRoutes = require("./routing/api/apiRoutes");
// apiRoutes(app);

require("./app/routing/htmlRoutes")(app);

// turn on server (app.listen())
app.listen(PORT, function () {
  console.log(`App is now running on http://localhost:${PORT}`);
});