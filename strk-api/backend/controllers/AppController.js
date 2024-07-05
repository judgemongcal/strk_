const appModel = require("../models/appModel");

// @TODO: Provide functions
exports.getUsers = async (req, res) => {
	try {
		const users = await appModel.getUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
