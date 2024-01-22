const express = require("express");
const router = express.Router();

router.use("/contacts", require("./contactRoutes"));
router.use("/users", require("./userRoutes"));

module.exports = router;
