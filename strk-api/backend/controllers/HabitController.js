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
	console.log(req.params.id);
	try {
		const habit = await habitModel.getHabit(req.params.id);
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
		res.status(200).json({
			message: "Habit has been added successfully.",
			payload: habit,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateHabit = async (req, res) => {
	try {
		const habit = await habitModel.updateHabit(
			req.params.user_id,
			req.params.habit_id,
			req.body,
		);
		res.status(200).json({
			message: "Habit has been edited successfully.",
			payload: habit,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteHabit = async (req, res) => {
	try {
		const habit = await habitModel.deleteHabit(
			req.params.user_id,
			req.params.habit_id,
		);
		res.status(200).json({
			message: "Habit has been deleted successfully.",
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
