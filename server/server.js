const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./config/db.config.js");

db.authenticate((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/*app.get("/", (res) => {
  res.json({ message: "Server is running" });
});
*/

const router = require("./routes/routes.js");
app.use(router);


// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});