require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8008 || process.env.PORT;
app.use(express.json());
const cors = require("cors");
app.use(cors());
console.log(process.env.MONGO_DB_URI);
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to DB :)");
});

require("./models/user");
require("./models/post");
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(PORT, () => console.log("Server is running on " + PORT));
