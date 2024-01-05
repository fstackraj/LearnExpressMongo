// Description: Contact controller
const asyncHandler = require("express-async-handler"); // for handling async errors

// GET /api/contacts
const getContact = asyncHandler(async (req, res) => {
  res.send("All contacts list");
});

// GET /api/contacts/:id
const getContactById = asyncHandler(async (req, res) => {
  res.send("Get contact for id =>" + req.params.id);
});

// POST /api/contacts
const addContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please include name, email and phone");
  }
  res.status(201).json({ msg: "Add contact", reqBody: req.body });
});

// PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res) => {
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
