
CREATE TABLE IF NOT EXISTS users(
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	password_hash TEXT NOT NULL,
	first_name VARCHAR(50),
	last_name VARCHAR(50)
)


CREATE TABLE IF NOT EXISTS habits(
	habit_id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(user_id),
	habit_name VARCHAR(100) NOT NULL
)

CREATE TABLE IF NOT EXISTS habit_entries(
	entry_id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(user_id),
	habit_id INTEGER REFERENCES habits(habit_id),
	entry_date DATE,
	duration INTEGER
)



