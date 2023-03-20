//External import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//Internal import :
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewears/common/errorHandle");
const loginRouter = require("./routes/login.route");
const usersRouter = require("./routes/users.route");
const inboxRouter = require("./routes/inbox.route");

const app = express();
dotenv.config();

//mongodb connection:
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("mongodb is connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
//requiest parser:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine:
app.set("view engine", "ejs");

//set static folder:
app.use(express.static(path.join(__dirname, "public")));

//parse cookies:
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup:
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//error handling 404 not found:
app.use(notFoundHandler);

//default common error handler:
app.use(errorHandler);

//app running:
app.listen(process.env.PORT, () => {
  console.log(`app is listening at port ${process.env.PORT}`);
});
