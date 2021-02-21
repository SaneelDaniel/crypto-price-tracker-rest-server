const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

const key = "9TNHBZIN3BI9NVGM";
//const url ="http://api.coinlayer.com/live?access_key=e6df6d6875d8f374cfa53dd1f73e5859";

const baseUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&outputsize=compact&market=USD&apikey=${key}`;

router.get("/", (req, res) => {
  var fetchUrl = `${baseUrl}&symbol=${
    req.query.symbol ? req.query.symbol : "BTC"
  }`;
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log("URL: >>>>>>", fetchUrl);

      console.log(
        "JSON: >>>>>>",
        json["Time Series (Digital Currency Daily)"]["2021-02-17"]
      );
      res.status(200).json(json);
    });
});

module.exports = router;
