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

exports.getEntry = async (req, res) => {
	try {
		const entry = await habitEntryModel.getEntry(
			req.params.entryId,
		);
		res.status(200).json(entry);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.addEntry = async (req, res) => {
	try {
		const entry = await habitEntryModel.addEntry(req.body);
		res.status(200).json({
			message: "Entry has been added successfully.",
			payload: entry,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
