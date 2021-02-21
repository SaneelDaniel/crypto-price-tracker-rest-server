const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

const key = "07588c07-77f1-4932-885c-31ff828b235d";
// const url = "http://api.coinlayer.com/live?access_key=e6df6d6875d8f374cfa53dd1f73e5859";

const url =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=USD";

router.get("/", (req, res) => {
  var fetchUrl = `${url}&symbol=${req.query.symbol ? req.query.symbol : "BTC"}`;
  fetch(fetchUrl, {
    headers: { "X-CMC_PRO_API_KEY": key },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("URL: >>>>>>", url);
      console.log("JSON: >>>>>>", json);
      if (json !== null) {
        res.status(200).json(json);
      }
    })
    .catch((err) => {
      res.status(404);
    });
});

module.exports = router;
