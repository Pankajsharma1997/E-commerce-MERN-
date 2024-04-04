const express = require("express");
const cors = require("cors");
const User = require("./DB/Users");
require("./DB/Config");

const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.listen(5000);
