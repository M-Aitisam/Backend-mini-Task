const express = require("express"); // Import Express
const app = express(); // Initialize Express app
// app  generaotr
app.use(express.json()); // Middleware to parse JSON requests

const PORT = 3000; // Define the port

// Sample data (in-memory database)
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" }
];

// 1. GET Route - Fetch all users
app.get("/users", (req, res) => {
  res.json(users);
});

// 2. POST Route - Add a new user
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 3. PUT Route - Update a user by ID
app.put("/ /:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.name = req.body.name;
  res.json(user);
});

// 4. DELETE Route - Remove a user by ID
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);
  res.json({ message: "User deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
