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

exports.getHabit = async (req, res) => {
	try {
		const { userId, habitId } = req.params;
		const habit = await habitModel.getHabit(
			userId,
			habitId,
		);
		res.status(200).json(habit);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.addHabit = async (req, res) => {
	try {
		const { user_id, habit_name } = req.body;
		const habit = await habitModel.addHabit(
			user_id,
			habit_name,
		);
		res.status(200).json(habit);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateHabit = async (req, res) => {};

exports.deleteHabit = async (req, res) => {};
