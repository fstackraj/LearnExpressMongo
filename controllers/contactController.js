// Description: Contact controller
const asyncHandler = require("express-async-handler"); // for handling async errors
const Contact = require("../models/contactModel");

// GET /api/contacts
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
});

// GET /api/contacts/:id
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// POST /api/contacts
const addContact = asyncHandler(async (req, res) => {
  const contact = Contact(req.body);
  await contact.save();
  res.send(contact);
});

// PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please include name, email and phone");
  }
  res.send("Update contact for user id => " + req.params.id);
});

// DELETE /api/contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  res.send("Delete contact for user id => " + req.params.id);
});

module.exports = {
  getContact,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
};
