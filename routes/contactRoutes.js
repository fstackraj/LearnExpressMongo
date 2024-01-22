const express = require("express");
const router = express.Router();
const {
  getContact,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");

router.use(validateToken);
// @route GET api/contacts
router.route("/").get(getContact);

// @route POST api/contacts
router.route("/").post(addContact);

// @route GET api/contacts/:id
router.route("/:id").get(getContactById);

// @route PUT api/contacts/:id
router.route("/:id").put(updateContact);

// @route DELETE api/contacts/:id
router.route("/:id").delete(deleteContact);

module.exports = router;
