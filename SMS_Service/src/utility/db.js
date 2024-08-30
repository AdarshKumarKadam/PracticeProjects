const mongoose = require("mongoose");

const createConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
    return connection;
  } catch (error) {
    console.error(error.message);

  }
};


module.exports = createConnection;