const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FormInputSchema = new Schema({
  //same names as in MessageForm.jsx
  sender_name: { type: String, required: true },
  sender_email_id: { type: String, required: true },
  sender_message: { type: String, required: true },
});

module.exports = mongoose.model("ContactForm", FormInputSchema);
