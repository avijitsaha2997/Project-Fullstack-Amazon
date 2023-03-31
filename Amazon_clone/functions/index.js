/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MBETiEoO1u2OXgFHzh7NnU6JvId9v3gfGFe9yBKwf2yF5pAbT4fvA4zqjQEHnkwxqF6ZlUIF3MvmZhz84XUX8Ad00TPkf4J97");

// api

// apni config
const app = express();


// middlewares
app.use(express.json());
app.use(cors());

// app routes
app.get("/", (request, response)=> response.status(200).send("hello world"));
app.get("/avi", (request, response)=> response.status(200).send("nc work"));

app.post("/payments/create", (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved!!!", total);

  const paymentIntent = stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);


// http://127.0.0.1:5001/clone-68bd5/us-central1/api
