-- HOMEWORK Part 1: Working with tasks

USE hyf_lesson2;
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task (title, description, created, updated, due_date, status_id) 
VALUES ('Pick-up kids', 'Get the kids from schools', '2020-09-06 03:16:47', '2020-10-10 16:56:58', null, 2);

SELECT *
FROM task
WHERE id=36;

-- Change the title of a task
UPDATE task
SET title='Bike home with kids'
WHERE id=36;

SELECT *
FROM task;


-- Change a task due date
UPDATE task
SET due_date=concat('2021-01-12 ', time(due_date))
WHERE id=2;

-- Change a task status
UPDATE task
SET status_id=2
WHERE id=25;

SELECT*
FROM task
INNER JOIN status ON status.id=task.status_id
WHERE task.id=25;

-- Mark a task as complete
UPDATE task
SET status_id=3
WHERE id=5;

SELECT task.id, task.title, status.name AS status
FROM task
INNER JOIN status ON task.status_id=status.id
WHERE task.id=5;

-- Delete a task
DELETE 
FROM task
WHERE id=20;

SELECT *
FROM task;