const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      retryWrites: true,
      w: "majority",
    });
    console.log(
      `MongoDB Connected: ${connect.connection.host}, ${connect.connection.name}`
    );
    // mongoose.Promise = global.Promise;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

mongoose.Promise = global.Promise;
module.exports = connectDb;
