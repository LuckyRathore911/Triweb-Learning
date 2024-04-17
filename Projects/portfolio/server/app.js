const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const ContactForm = require("./model/ContactForm");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The server is running");
});

app.post("/contact-me", async (req, res) => {
  try {
    await ContactForm.create(req.body);
    res.send({ status: "Form submitted successfully!" }); //send to frontend  .. ContactMe.jsx
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

mongoose
  .connect(process.env.connectionString)
  .then(() => {
    app.listen(process.env.port);
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    return;
  });
