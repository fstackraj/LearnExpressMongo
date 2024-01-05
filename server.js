const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json

app.use("/api", require("./routes/index"));

app.use(errorHandler); // Error handler middleware should be the last one in the middleware stack to handle errors properly

app.listen(port, () => console.log(`Server running on port ${port}`));
