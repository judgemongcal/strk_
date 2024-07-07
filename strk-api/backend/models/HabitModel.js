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

exports.addHabit = async (id, habitData) => {};

exports.updateHabit = async (id, habitData) => {};

exports.deleteHabit = async (id) => {};
