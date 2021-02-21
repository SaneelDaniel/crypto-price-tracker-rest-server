const express = require("express");
const fetch = require("node-fetch");
const liveDataRoutes = require("./api/routes/livedata");
const dailyDataRoutes = require("./api/routes/tickerInfo");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/live", liveDataRoutes);
app.use("/daily", dailyDataRoutes);

app.use((req, res, next) => {
  const error = new Error("Item Not Found");
  error.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: { message: err.message } });
});

module.exports = app;
