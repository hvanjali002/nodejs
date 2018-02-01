// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");

// generate a new application running as apps
const app = express();

// route finalhandler
app.get("/", (req, res) => {
  res.send({
    Hello: "world"
  });
});

app.listen(5000);
