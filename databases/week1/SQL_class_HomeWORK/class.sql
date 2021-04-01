SELECT name, phone
FROM user;

SELECT name
FROM user
WHERE id=10;

SELECT COUNT(id)
FROM user;

SELECT name 
FROM user
LIMIT 0,5;

SELECT user.name
FROM user
ORDER BY name DESC
LIMIT 0,3;

SELECT SUM(user.id)
FROM user;

SELECT user.name
FROM user
ORDER BY name ASC;

SELECT *
FROM task
WHERE description LIKE "%SQL%" OR title LIKE "%SQL%";

SELECT description, title
FROM task
WHERE description LIKE "%SQL%" OR title LIKE "%SQL%";

SELECT *
FROM task 
JOIN user ON task.user_id=user.id
WHERE user.name LIKE "%Maryrose%";

SELECT COUNT(task.id), name
FROM user
JOIN task ON task.user_id=user.id
GROUP BY user.name;

SELECT COUNT(task.id), name
FROM user
JOIN task ON task.user_id=user.id
GROUP BY user.name;








