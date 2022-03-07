const express = require("express");
const PORT = process.env.PORT || 8080;

express()
  .get("/", (req, res) => {
    res.send("Hello Control Plane!");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
