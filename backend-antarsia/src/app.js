const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/members", require("./routes/members.routes"));
app.use("/api/pdf", require("./routes/pdf.routes"));

module.exports = app; 