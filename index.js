require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
var bodyParser = require("body-parser");
const userRouter = require("./helper/helper")

///////////////////////////////////////////////////////////////////

const connect = async() => {
  try {
    mongoose.set('strictQuery', false);
    const connect = mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
   
   
    return connect
      ? console.log("DB is connected")
      : console.log("DB is not connected");
  } catch (error) {
    throw error;
  }
};

connect();

//////////////////////////////////////////////////////////////////////////////////

// app.use
const path = require('path')
app.use('/static', express.static(path.join(__dirname, './client/build')))
app.use(cors({
  "origin": "*",
//   "methods": "GET,PUT,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204,
//  "allowedHeaders":"Authorization"
}));

// End use cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
///////////////////
app.use("/api",userRouter);
//


app.get ("*", async (req, res,next) => {
  res.sendFile(
    path.join(__dirname, './client/build/index.html')
  );
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
