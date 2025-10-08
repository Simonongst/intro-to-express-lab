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

// 3. I Want THAT One!
const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

app.get("/collectibles/:index", (req, res) => {
  const index = Number(req.params.index);

  if (isNaN(index) || index < 0 || index > collectibles.length - 1) {
    return res.send("This item is not yet in stock. Check back soon!");
  }

  const item = collectibles[index];
  res.send(
    `So, you want the ${item.name}? For ${item.price}, it can be yours!`
  );
});

// 4. Filter Shoes by Query Parameters
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
    const minPrice = Number(req.query["min-price"]);
    const maxPrice = Number(req.query["max-price"]);
    const type = req.query.type;

    let filteredShoes = shoes;

    if(!isNaN(minPrice)){
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    if(!isNaN(maxPrice)){
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    if(type){
    filteredShoes = filteredShoes.filter(shoe => shoe.type === type)
    }

    const result = filteredShoes.map(shoe => `Name: ${shoe.name}, Price: ${shoe.price}, Type: ${shoe.type}`
    ).join("<br>");

    res.send(result || "No shoes match your criteria.")
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});