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

// @TODO: Add more calls
