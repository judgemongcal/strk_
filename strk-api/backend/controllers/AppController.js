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
		const user = await appModel.addUser(req.body);
		console.log(user);
		res.status(200).json({
			message: `Successfully added ${req.body.first_name} ${req.body.last_name}.`,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.editUser = async (req, res) => {
	try {
		const user = await appModel.updateUser(
			req.query.id,
			req.body,
		);
		res.status(200).json({
			message: `Successfully edited user information of ${req.body.first_name} ${req.body.last_name}.`,
		});

		console.log(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const user = await appModel.deleteUser(req.query.id);
		res.status(200).json({
			message: `Successfully deleted user.`,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
