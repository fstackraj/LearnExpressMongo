// Description: Contact controller
const asyncHandler = require("express-async-handler"); // for handling async errors
const Contact = require("../models/contactModel");

// GET /api/contacts
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
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
  console.log(req.user);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please include name, email and phone");
  }
  const contact = Contact({
    user_id: req.user.id,
    name,
    email,
    phone,
  });
  await contact.save();
  res.status(201).json(contact);
});

// PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error(
        "User don't have permission to update other user contacts"
      );
    }
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(404);
    throw new Error("Contact not found");
  }
});

//   const contact = await Contact.findById(req.params.id);
//   if (!contact) {
//     res.status(404);
//     throw new Error("Contact not found");
//   }

//   if (contact.user_id.toString() !== req.user.id) {
//     res.status(403);
//     throw new Error("User don't have permission to update other user contacts");
//   }

//   const updatedContact = await Contact.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.status(200).json(updatedContact);
// });

// DELETE /api/contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ message: "Contact removed" });
});

module.exports = {
  getContact,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
};
