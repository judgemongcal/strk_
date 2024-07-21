const appModel = require("../models/UnitsModel");

exports.getUnits = async (req, res) => {
	try {
		const units = await appModel.getUnits();
		res.status(200).json(units);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
