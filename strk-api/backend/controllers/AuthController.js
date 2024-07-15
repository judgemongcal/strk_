const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
	try {
		const user = await userModel.createUser(req.body);

		res.status(200).json({
			message: "User has been created successfully.",
			payload: user,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.login = async (req, res) => {
	const { username, password } = req.body;
	console.log(username, password);
	try {
		const user = await userModel.getUserByUsername(
			username,
		);

		console.log(user);

		if (!user || user.length === 0) {
			return res
				.status(400)
				.json({ error: "Invalid username or password." });
		}

		console.log("Retrieved user:", user);
		const isMatch = await bcrypt.compare(
			password,
			user.password_hash,
		);

		if (!isMatch) {
			return res
				.status(400)
				.json({ error: "Invalid username or password" });
		}

		const token = jwt.sign(
			{ userId: user.id },
			process.env.JWT_SECRET,
			{ expiresIn: "1hr" },
		);
		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
