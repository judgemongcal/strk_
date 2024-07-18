const { client } = require("../config/dbconfig");
const bcrypt = require("bcrypt");

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

exports.getUser = async (id) => {
	try {
		const res = await client.query(
			`
			SELECT email, first_name, last_name, user_id, created_at
			FROM users
			WHERE user_id = $1`,
			[id],
		);
		return res.rows;
	} catch (error) {
		throw new Error(
			`Error fetching user: ${error.message}`,
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

exports.createUser = async (data) => {
	const {
		username,
		email,
		password,
		first_name,
		last_name,
	} = data;
	const password_hash = await bcrypt.hash(password, 10);
	try {
		const res = await client.query(
			`
		INSERT INTO users (username, email, password_hash, first_name, last_name)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING *
		`,
			[
				username,
				email,
				password_hash,
				first_name,
				last_name,
			],
		);

		return res.rows[0];
	} catch (error) {
		throw new Error(
			`Error creating user: ${error.message}`,
		);
	}
};

exports.getUserByUsername = async (username) => {
	try {
		const res = await client.query(
			`
		SELECT *
		FROM users
		WHERE username = $1
		`,
			[username],
		);

		return res.rows[0];
	} catch (error) {
		throw new Error(
			`Error fetching user: ${error.message}`,
		);
	}
};
// @TODO: Add more calls
