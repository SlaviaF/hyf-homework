-- HYF Week2 Part 2
-- MORE QUERIES
USE hyf_lesson2;

SELECT *
FROM task;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title AS task, user.name, user.email
FROM task
INNER JOIN user_task ON task.id=user_task.user_id
INNER JOIN user ON user_task.user_id=user.id
WHERE user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT task.title, user_task.user_id, user.name, status.name
FROM task
INNER JOIN user_task ON task.id=user_task.task_id
INNER JOIN user ON user.id=user_task.user_id
INNER JOIN status ON task.status_id=status.id
WHERE user.name ="Donald Duck" AND status.name="Not started";

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT user.name, task.created AS September_task
FROM user
INNER JOIN user_task ON user.id=user_task.user_id
INNER JOIN task ON task_id=user_task.task_id
WHERE user.name="Maryrose Meadows" AND month(created)=9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

 SELECT  month(created) AS task_OCT_SEPT, COUNT(month(created)) AS No_of_task
 FROM task
 GROUP BY month(created);
 
 