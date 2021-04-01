USE hyf_lesson1;

-- Find out how many tasks are in the task table
SELECT COUNT(id)
FROM task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id)
FROM task
WHERE due_date IS NULL;

-- Find all the tasks that are marked as done
SELECT task.id, task.title, task.description, status.name
FROM task
INNER JOIN status ON status.id=task.status_id
WHERE status.name="done";

-- Find all the tasks that are not marked as done
SELECT task.id, task.title, task.description, status.name
FROM task
INNER JOIN status ON status.id=task.status_id
WHERE status.name!="done";

-- Get all the tasks, sorted with the most recently created first
SELECT title, created
FROM task
ORDER BY created DESC;

-- Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
Limit 0, 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE LOWER(description) LIKE "%database%" OR LOWER(title) LIKE "%database%";

-- Get the title and status (as text) of all tasks
SELECT task.title, status.name
FROM task
INNER JOIN status ON status.id=task.status_id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT COUNT(task.status_id), status.name
FROM task
INNER JOIN status ON status.id=task.status_id
GROUP BY task.status_id;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(status.name) AS count_status
FROM status
INNER JOIN task ON status.id=task.status_id
GROUP BY status.id
ORDER BY count_status DESC;

		












