const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");
app.use("/api", bookRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("Library API Running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});
const cors = require("cors");
app.use(cors());