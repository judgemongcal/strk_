const express = require("express");
const app = express();
const userRoutes = require("./routes/UserRoutes.js");

app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
	console.log(`Server is running on port ${PORT}`),
);
