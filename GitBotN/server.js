const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");
const apiRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

// Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes
app.use("/", indexRoutes);
app.use("/api", apiRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
