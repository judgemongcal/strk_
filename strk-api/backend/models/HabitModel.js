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

exports.addHabit = async (id, habitData) => {};

exports.updateHabit = async (id, habitData) => {};

exports.deleteHabit = async (id) => {};
