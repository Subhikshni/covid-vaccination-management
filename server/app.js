const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db");
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
