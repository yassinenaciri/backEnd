const express = require("express");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

const users = require("./metier/users");

app.get("/", (req, res) => {});

app.all("/connection", (req, res) => {
  let user = req.body;
  users.exists(user).then((result) => {
    res.json(result);
  });
});

app.all("/addUser", (req, res) => {
  let newUser = req.body;
  users.addUser(newUser).then((user) => res.json(user));
});
const PORT = process.env.PORT || 6700;

app.listen(PORT, () => console.log("server started"));
