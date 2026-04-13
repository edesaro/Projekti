const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); 

// Dummy data
let items = [
  { id: 1, name: "Item A" },
  { id: 2, name: "Item B" }
];

// Users dummy data
let users = [];

// POST /users (register)
app.post("/users", (req, res) => {
  const { username, email, password } = req.body;
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// POST /users/login
app.post("/users/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user) {
    res.json({ token: "fake-jwt-token", user });
  } else {
    res.status(401).json({ error: "Käyttäjä ei löydy" });
  }
});

// GET /entries
app.get("/entries", (req, res) => {
  res.json([
    { id: 1, date: "2024-01-01", content: "Testi merkintä" }
  ]);
});

// READ – GET /api/items
app.get("/api/items", (req, res) => {
  res.status(200).json(items);
});

// CREATE – POST /api/items
app.post("/api/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name || "Unnamed"
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// UPDATE – PUT /api/items/:id
app.put("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  item.name = req.body.name || item.name;
  res.status(200).json(item);
});

// DELETE – DELETE /api/items/:id
app.delete("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => console.log("Full backend running on http://localhost:3000 with login/register support!"));
