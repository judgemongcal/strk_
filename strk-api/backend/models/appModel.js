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

// @TODO: Add more calls
