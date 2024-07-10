const { client } = require("../config/dbconfig");

exports.getEntries = async (userId, habitId) => {
	try {
		const res = await client.query(
			`
            SELECT *
            FROM habit_entries
            WHERE user_id = $1
            AND   habit_id = $2
            `,
			[userId, habitId],
		);

		return res.rows;
	} catch (error) {
		throw new Error(
			`Error fetching habit entries: ${error.message}`,
		);
	}
};

exports.getEntry = async (entryId) => {
	try {
		const res = await client.query(
			`SELECT *
			 FROM habit_entries
			 WHERE entry_id = $1`,
			[entryId],
		);

		return res.rows;
	} catch (error) {
		throw new Error(
			`Error fetching habit entry: ${error.message}`,
		);
	}
};

exports.addEntry = async (body) => {
	const { user_id, habit_id, entry_date, duration } = body;
	try {
		const res = await client.query(
			`
		INSERT INTO habit_entries (user_id, habit_id, entry_date, duration)
		VALUES ($1, $2, $3, $4)
		RETURNING *
		`,
			[user_id, habit_id, entry_date, duration],
		);

		return res.rows;
	} catch (error) {
		throw new Error(`Error adding entry: ${error.message}`);
	}
};
