import expressAsyncHandler from "express-async-handler";
import Contact from "../model/contact.model.js";

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Public
export const getContact = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find(); // Fetch all contacts
  res.status(200).json({ contacts });
});

// @desc    Get contact by ID
// @route   GET /api/contact/:id
// @access  Public
export const getContactById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json({ contact });
});

// @desc    Create new contact
// @route   POST /api/contact
// @access  Public
export const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields should be filled");
  }

  const contact = await Contact.create({ name, email, phone });

  res.status(201).json({
    message: "Contact created successfully",
    contact,
  });
});

// @desc    Update contact
// @route   PUT /api/contact/:id
// @access  Public
export const updateContact = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const contact = await Contact.findById(id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  contact.name = name || contact.name;
  contact.email = email || contact.email;
  contact.phone = phone || contact.phone;

  const updatedContact = await contact.save();

  res.status(200).json({
    message: "Contact updated successfully",
    contact: updatedContact,
  });
});

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Public
export const deleteContact = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    throw new Error("Invalid contact ID");
  }

  // Find the contact
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // Delete the contact
  await Contact.deleteOne({ _id: id });

  res.status(200).json({
    message: "Contact deleted successfully",
    contact,
  });
});
