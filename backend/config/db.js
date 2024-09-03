const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "polling",
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error while connecting to db: " + error);
    process.exit(1);
  }
};

module.exports = connectDB;
