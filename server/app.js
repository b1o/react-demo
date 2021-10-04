const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const TEST_USER = {
  username: "stoyan",
  age: 51,
  email: "stoyan@mail.com",
};

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "test" && password === "123") {
    res.json({ result: TEST_USER, success: true });
  } else {
    res.status(401);
    res.json({ error: "Invalid Credentials" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
