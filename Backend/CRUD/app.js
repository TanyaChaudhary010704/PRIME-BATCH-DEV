const express = require("express");
const app = express();
const port = 1010;
app.use(express.json()); //middleware

let users = [
  { id: 1, name: "Tanya" },
  { id: 2, name: "Tanisha" },
];

//create
app.post("/users", (req, res) => {
  try {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
  }
});

//READ all users
app.get("/users", (req, res) => {
  res.json(users);
});

// READ one user
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

//UPDATE
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name;
  res.json(user);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

//to start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
