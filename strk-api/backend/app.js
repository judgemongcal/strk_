require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/UserRoutes.js");
const habitRoutes = require("./routes/HabitRoutes.js");
const habitEntryRoutes = require("./routes/HabitEntryRoutes.js");
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/entries", habitEntryRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
	console.log(`Server is running on port ${PORT}`),
);
