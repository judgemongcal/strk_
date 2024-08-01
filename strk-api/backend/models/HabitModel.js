const { client } = require("../config/dbconfig");

exports.getHabits = async (id) => {
	try {
		const res = await client.query(
			`
            SELECT *
            FROM habits
            WHERE user_id = $1`,
			[id],
		);

		return res.rows;
	} catch (error) {
		throw new Error(
			`Error fetching habits: ${error.message}`,
		);
	}
};

exports.getHabit = async (id) => {
	try {
		const res = await client.query(
			`
        SELECT *
        FROM habits
        WHERE habit_id = $1`,
			[id],
		);

		if (res.rowCount === 0) {
			throw new Error("Habit not found");
		}

		return res.rows;
	} catch (error) {
		throw new Error(
			`Error fetching habit: ${error.message}`,
		);
	}
};

exports.addHabit = async (id, habit, unit_id) => {
	try {
		const res = await client.query(
			`
		INSERT INTO habits (user_id, habit_name, unit_id)
		VALUES ($1, $2, $3)
		RETURNING *
		`,
			[id, habit, unit_id],
		);
		return res.rows;
	} catch (error) {
		throw new Error(`Error adding habit: ${error.message}`);
	}
};

exports.updateHabit = async (habit_id, habit) => {
	try {
		const res = await client.query(
			`
		UPDATE habits
		SET    habit_name = $1,
			   unit_id = $2
		WHERE  habit_id = $3
		RETURNING *
		`,
			[habit.habit_name, habit.unit_id, habit_id],
		);

		if (res.rowCount === 0) {
			throw new Error("Habit not found");
		}

		return res.rows;
	} catch (error) {
		throw new Error(`Error adding habit: ${error.message}`);
	}
};

exports.deleteHabit = async (habit_id) => {
	try {
		const res = await client.query(
			`
			DELETE FROM habits
			WHERE  habit_id = $1
			`,
			[habit_id],
		);
		if (res.rowCount === 0) {
			throw new Error("Habit not found");
		}

		return res.rows;
	} catch (error) {
		throw new Error(
			`Error deleting habit: ${error.message}`,
		);
	}
};
