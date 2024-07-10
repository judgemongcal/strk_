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

exports.getHabit = async (userId, habitId) => {
	try {
		const res = await client.query(
			`
        SELECT *
        FROM habits
        WHERE user_id = $1
        AND   habit_id = $2`,
			[userId, habitId],
		);

		return res.rows;
	} catch (error) {
		throw new Error(
			`Error fetching habit: ${error.message}`,
		);
	}
};

exports.addHabit = async (id, habit) => {
	try {
		const res = await client.query(
			`
		INSERT INTO habits (user_id, habit_name)
		VALUES ($1, $2)
		RETURNING *
		`,
			[id, habit],
		);
		return res.rows;
	} catch (error) {
		throw new Error(`Error adding habit: ${error.message}`);
	}
};

exports.updateHabit = async (user_id, habit_id, habit) => {
	try {
		const res = await client.query(
			`
		UPDATE habits
		SET    habit_name = $1
		WHERE  user_id = $2
		AND    habit_id = $3
		RETURNING *
		`,
			[habit.habit_name, user_id, habit_id],
		);

		if (res.rowCount === 0) {
			throw new Error("Habit not found");
		}

		return res.rows;
	} catch (error) {
		throw new Error(`Error adding habit: ${error.message}`);
	}
};

exports.deleteHabit = async (user_id, habit_id) => {
	try {
		const res = await client.query(
			`
			DELETE FROM habits
			WHERE  user_id = $1
			AND    habit_id = $2
			`,
			[user_id, habit_id],
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
