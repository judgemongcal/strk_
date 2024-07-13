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
	try {
		const user = await userModel.getUserByUsername(
			username,
		);
		if (!user) {
			return res
				.status(400)
				.json({ error: "Invalid username or password" });
		}

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
