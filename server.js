const express = require("express");
const app = express();

// 1. Be Polite, Greet the User
app.get("/greetings/:username", (req, res) => {
  res.send(
    `<h1>What a delight it is to see you once more, ${req.params.username}.</h1>`
  );
});

// 2. Rolling the Dice
app.get("/roll/:number", (req, res) => {
  const num = Number(req.params.number);

  if (isNaN(num)) {
    return res.send("You must specify a number.");
  }

  const roll = Math.floor(Math.random() * (num + 1));
  res.send(`You rolled a ${roll}.`);
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
