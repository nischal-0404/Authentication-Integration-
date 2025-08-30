import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: [true, "Please add the contact name"] },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please add the phone number"],
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
