const habitModel = require("../models/HabitModel");

exports.getHabits = async (req, res) => {
	try {
		const habits = await habitModel.getHabits(
			req.params.id,
		);
		res.status(200).json(habits);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.addHabit = async (req, res) => {};

exports.updateHabit = async (req, res) => {};

exports.deleteHabit = async (req, res) => {};
