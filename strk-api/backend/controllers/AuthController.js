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
