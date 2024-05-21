const express = require('express');
const axios = require('axios');
const getProfile = require('./helpers.js');
const ExpressError = require('./expressError.js');

const app = express();

app.use(express.json());

app.post("/", async function(req, res, next) {
  try {
    let info = await getProfile(req.body.developers);
    res.send(info)
  } catch(err) {
    next(err)
  }

});

/** 404 handler */
app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

/** general error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000")
});



