const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HZTo9Kz4kOAjF4cF3ezXIUGdf8k8Q57YMy1TVTUFUO6MpIkFcnHld3V9N7anhWr9wQShTBDo2P7Zz9EQxqvKB7I00c1QTd3Zc"
);
//API
//App config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API Route
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received...", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: "usd",
  });
  //Ok but created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen Command
exports.api = functions.https.onRequest(app);

//Exampleend point
//http://localhost:5001/clone-dd298/us-central1/api
