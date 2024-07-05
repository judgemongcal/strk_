
CREATE TABLE IF NOT EXISTS users(
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(50)
)

CREATE TABLE IF NOT EXISTS habits(
	habit_id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	habit_name VARCHAR(100) NOT NULL,
	CONSTRAINT fk_author
		FOREIGN KEY (user_id)
		REFERENCES users(user_id)
)
