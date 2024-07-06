const { client } = require("../config/dbconfig");

exports.getUsers = async () => {
	try {
		const res = await client.query("SELECT * FROM users");
		return res.rows;
	} catch (error) {
		throw new Error(
			`Error fetching users: ${error.message}`,
		);
	}
};

exports.addUser = async (userData) => {
	try {
		const res = await client.query(
			`INSERT INTO users (username, first_name, last_name)
			VALUES ($1, $2, $3) 
			RETURNING *`,
			[
				userData.username,
				userData.first_name,
				userData.last_name,
			],
		);
	} catch (error) {
		throw new Error(`Error adding user: ${error.message}`);
	}
};

exports.updateUser = async (id, userData) => {
	try {
		const res = await client.query(
			`UPDATE users
			 SET    username = $1, first_name = $2, last_name = $3
			 WHERE  user_id = $4`,
			[
				userData.username,
				userData.first_name,
				userData.last_name,
				id,
			],
		);

		if (res.rowCount === 0) {
			throw new Error("User not found");
		}

		return res.rows[0];
	} catch (error) {
		throw new Error(
			`Error updating user: ${error.message}`,
		);
	}
};

exports.deleteUser = async (id) => {
	try {
		const res = await client.query(
			`DELETE FROM users
			 WHERE user_id = $1
			`,
			[id],
		);

		if (res.rowCount === 0) {
			throw new Error("User not found");
		}

		return res.rows[0];
	} catch (error) {
		throw new Error(
			`Error deleting user: ${error.message}`,
		);
	}
};

// @TODO: Add more calls
