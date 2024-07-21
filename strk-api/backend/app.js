require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/AuthRoutes.js");
const userRoutes = require("./routes/UserRoutes.js");
const habitRoutes = require("./routes/HabitRoutes.js");
const unitRoutes = require("./routes/UnitsRoutes.js");
const habitEntryRoutes = require("./routes/HabitEntryRoutes.js");
const { auth } = require("./middleware/auth.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", auth, userRoutes);
app.use("/api/habits", auth, habitRoutes);
app.use("/api/entries", auth, habitEntryRoutes);
app.use("/api/units", unitRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
	console.log(`Server is running on port ${PORT}`),
);
