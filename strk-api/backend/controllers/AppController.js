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

exports.addUser = async (req, res) => {
	try {
		const user = appModel.addUser(req.body);
		res.status(200).json({
			message: `Successfully added ${req.body.first_name} ${req.body.last_name}.`,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
