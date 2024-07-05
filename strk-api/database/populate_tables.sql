
INSERT INTO users (username, first_name, last_name)
VALUES		('amysmith', 'Amy', 'Smith'),
			('mevans', 'Michael', 'Evans'),
			('renalee', 'Rena', 'Lee')
			
INSERT INTO habits (user_id, habit_name)
VALUES      ('1', 'Reading 📚'),
			('2', 'Rock Climbing 🧗🏻'),
			('3', 'Running 🏃🏻‍♀️'),
			('3', 'Coding 👩🏻‍💻'),
			('2', 'Meditating 🧘🏻')
			
INSERT INTO habit_entries (user_id, habit_id, entry_date, duration)
VALUES      ('1', '1', '2024-08-07', '90'),
			('1', '1', '2024-08-08', '40'),
			('1', '1', '2024-08-09', '100'),
			('2', '5', '2024-08-07', '120'),
			('2', '5', '2024-08-08', '180'),
			('2', '2', '2024-08-07', '90'),
			('2', '2', '2024-08-08', '60'),
			('3', '3', '2024-08-07', '90'),
			('3', '3', '2024-08-08', '70'),
			('3', '3', '2024-08-09', '80'),
			('3', '3', '2024-08-10', '50'),
			('3', '4', '2024-08-07', '40'),
			('3', '4', '2024-08-08', '60'),
			('3', '4', '2024-08-09', '120'),
			('3', '4', '2024-08-10', '90')
			
			