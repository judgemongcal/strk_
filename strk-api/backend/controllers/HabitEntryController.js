const habitEntryModel = require("../models/HabitEntryModel");

exports.getEntries = async (req, res) => {
	try {
		const entries = await habitEntryModel.getEntries(
			req.params.userId,
			req.params.habitId,
		);
		res.status(200).json(entries);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
