// server/index.js
const cors = require("cors");
const express = require("express");
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'build')));

app.get("/home", (req,res) =>{
    res.send({ mileage: 7})
})
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  