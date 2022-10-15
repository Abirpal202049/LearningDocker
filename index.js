const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to Backend",
  });
});

app.get("/docker", (req, res) => {
    return res.json({ 
        message : "Learning Docker is the real fun 🐳"
    })
})

app.listen(PORT, () => {
  return console.log(`The server is up and running at port ${PORT}`);
});
