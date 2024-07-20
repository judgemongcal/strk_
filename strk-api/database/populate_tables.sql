
INSERT INTO users (username, email, password_hash,first_name, last_name)
VALUES		('amysmith', 'amysmith@mail.com', '$2b$12$7kGawwWKl9T8yAIef3Jp6.gNEzfkQ4DZGzytvXrFromBXHNllBZPa', 'Amy', 'Smith')
			
INSERT INTO habits (user_id, habit_name)
VALUES      ('1', 'Reading 📚')
			
			
INSERT INTO habit_entries (user_id, habit_id, entry_date, duration)
VALUES      ('1', '1', '2024-08-07', '90'),
			('1', '1', '2024-08-08', '40'),
			('1', '1', '2024-08-09', '100')
			
			
INSERT INTO units (unit_name)
VALUES  ('minutes'), 
		 ('hours'), 
		 ('sessions'), 
		 ('steps'), 
		 ('miles'), 
		 ('kilometers'), 
		 ('repetitions'), 
		 ('sets'),
		 ('liters'), 
		 ('kilograms'), 
		 ('words')
			
