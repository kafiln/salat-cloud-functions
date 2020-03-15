const functions = require("firebase-functions");
const express = require("express");
const routes = require("./routes");
const app = express();
const { langMiddlewear } = require("./middlewear");

// Routes
app.use("", langMiddlewear, routes);

// Expose Express API as a single Cloud Function:
exports.salat = functions.https.onRequest(app);
