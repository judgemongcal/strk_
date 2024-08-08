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
	try {
		const { user_id, habit_id, entry_date, measure } = body;
		const res = await client.query(
			`
		INSERT INTO habit_entries (user_id, habit_id, entry_date, measure)
		VALUES ($1, $2, $3, $4)
		RETURNING *
		`,
			[user_id, habit_id, entry_date, measure],
		);

		return res.rows;
	} catch (error) {
		throw new Error(`Error adding entry: ${error.message}`);
	}
};

exports.updateEntry = async (body) => {
	try {
		const { entry_id, measure } = body;
		const res = await client.query(
			`
			UPDATE habit_entries
			SET    measure = $1
			WHERE  entry_id = $2
			RETURNING *
			`,
			[measure, entry_id],
		);
		return res.rows;
	} catch (error) {
		throw new Error(
			`Error updating entry: ${error.message}`,
		);
	}
};

exports.deleteEntry = async (entryId) => {
	try {
		const res = await client.query(
			`
			DELETE FROM habit_entries
			WHERE entry_id = $1
			`,
			[entryId],
		);

		if (res.rowCount === 0) {
			throw new Error("Entry not found");
		}

		return res.rows;
	} catch (error) {
		throw new Error(
			`Error deleting habit: ${error.message}`,
		);
	}
};

exports.deleteEntries = async (userId, habitId) => {
	try {
		const res = await client.query(
			`
			DELETE FROM habit_entries
			WHERE user_id = $1
			AND   habit_id = $2
			`,
			[userId, habitId],
		);

		if (res.rowCount === 0) {
			throw new Error("Entries not found");
		}

		return res.rows;
	} catch (error) {
		throw new Error(
			`Error deleting habit: ${error.message}`,
		);
	}
};
