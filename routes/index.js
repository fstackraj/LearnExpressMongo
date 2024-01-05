const express = require("express");
const router = express.Router();

router.use("/contacts", require("./contactRoutes"));

module.exports = router;
