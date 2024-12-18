// depeindencies
let express = require("express");
let MongoDB = require("./connect");
let crud = require("./models/crud");
let router = require("./routes/crud")

// config
let app = express();
let PORT = 4000;

// Server Connection
app.listen(PORT, ()=> console.log("server connected"));

// Connecting to Database (MongoDB)
MongoDB("MongoDB Link Here")
  .then(() => console.log("MongoDB Connected!"))
  .catch((e) => console.log("MongoDB Error", e));


// Middleware 
app.use(express.urlencoded({ extended: true })); 

  // express route
app.use("/", router);

