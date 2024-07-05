const express = require("express");
const app = express();
const appRoutes = require("./routes/AppRoutes.js");

app.use(express.json());

// app.use()

const PORT = process.env.PORT || 5001;

app.listen(POST, () =>
	console.log(`Server is running on port ${PORT}`),
);
