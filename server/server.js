import mongoose from "mongoose";
import dotenv from "dotenv";

const app = require("./index");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION 💥Shutting Down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const DB = process.env.MONGO_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    strickQuery: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  });

const port = process.env || 8080;
const server = app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION 💥 Shutting Down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
