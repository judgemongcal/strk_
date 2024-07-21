const { client } = require("../config/dbconfig");

exports.getUnits = async () => {
	try {
		const res = await client.query("SELECT * FROM units");
		return res.rows;
	} catch (error) {
		throw new Error(
			`Error fetching users: ${error.message}`,
		);
	}
};
