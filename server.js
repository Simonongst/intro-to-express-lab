const express = require("express");
const app = express();

// 1. Be Polite, Greet the User
app.get("/greetings/:username", (req, res) => {
  res.send(
    `<h1>What a delight it is to see you once more, ${req.params.username}.</h1>`
  );
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
