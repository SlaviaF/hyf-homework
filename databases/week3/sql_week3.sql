CREATE DATABASE meal_sharing;
USE meal_sharing;

CREATE TABLE meal(
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR (255),
 description TEXT,
 location VARCHAR(255) NOT NULL,
 event_day DATETIME NOT NULL,
 max_reservations INT NOT NULL,
 price DECIMAL,
 created_date DATETIME DEFAULT NOW()
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE reservation(
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 number_of_guests INT NOT NULL,
 created_date DATETIME DEFAULT NOW(),
 contact_phonenumber INT NULL DEFAULT NULL,
 contact_name varchar(255) NOT NULL,
 contact_email varchar(255) NOT NULL,
  meal_id INT UNSIGNED,
CONSTRAINT fk_meal FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE review(
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(255),
 description TEXT,
 meal_id INT UNSIGNED,
 stars INT UNSIGNED,
 CHECK(stars<6),
 created_date DATETIME DEFAULT NOW(),
 CONSTRAINT fk_review_meal FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



INSERT INTO meal (title, description, location, event_day, max_reservations,price, created_date)
VALUES
('Chicken Korma', 'Chicken Korma is a delicious gravy usually made with onions, spices, nuts, yogurt, seeds, coconut and chicken. It originated in the Indian subcontinent during the Mughal Era & later became immensely popular across the world.', 'Copenhagen', '2021-07-10 12:30:00', 20, 150, now());

INSERT INTO meal (title, description, location, event_day, max_reservations,price, created_date)
VALUES
('Spaghetti Carbonara', 'Spaghetti Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, cured pork, and black pepper. The dish arrived at its modern form, with its current name, in the middle of the 20th century. The cheese is usually Pecorino Romano, Parmigiano-Reggiano, or a combination of the two.', 'Copenhagen', '2021-07-15 11:30:00', 15, 110, now()),
('Kefta Meatball Tagine', 'Kefta Meatball Tagine is a Moroccan dish traditionally made in a tagine. Small beef or lamb meatballs are simmered in a spiced tomato sauce, then eggs are added in the last few minutes of cooking. It is served from the same dish it is cooked in with crusty Moroccan bread.', 'Roskilde', '2021-07-13 12:30:00', 10, 150, now()),
('Paneer Butter Masala', 'Paneer Butter Masala is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter. It is one of the most popular dishes in Indian restaurants similar to kadai paneer, palak paneer, matar paneer and malai kofta.', 'Valby', '2021-07-16 15:30:00', 12, 120, now()),
('Boeuf Bourguignon', 'Hearty and delectable, beef bourguignon is famous not only across France but all over the world. ... It is a rich slow cooked beef stew, where the beef is braised in red wine with potatoes, carrots, mushrooms, garlic, onions and a bouquet garni (bundle of thyme, parsley and bay leaves', 'Frederiksberg', '2021-07-15 18:00:00',12 , 170, now()),
('Bun Cha', 'Bun Cha is a Vietnamese dish of grilled pork and noodle, which is thought to have originated from Hanoi, Vietnam. Bún chả is served with grilled fatty pork (chả) over a plate of white rice noodle (bún) and herbs with a side dish of dipping sauce.', 'Valby', '2021-07-11 12:00:00', 15, 110, now()),
('Eggplant Lasagna', 'Eggplant Lasagna is vegetarian Lasagna. In between the eggplant slices is a luscious, creamy mix of ricotta, spinach, Parmesan, and mushrooms. It\'s a vegetarian lasagna that is hearty, filling, and comforting, just as any good lasagna recipe should be.', 'Aarhus', '2021-07-15 12:30:00', 8, 100, now()),
('Chicken Khao Soi', 'Khao Soi is a deliciously creamy and slightly spicy yellow curry dish unique to Northern Thailand. ... Made with a blend of yellow and red curry spices, coconut milk, chicken broth, soy sauce, and sugar, the ingredients are slowly simmered to develop flavor.', 'Aalborg', '2021-07-17 12:30:00',10 , 150, now()),
('Dal Makhani with Rice and Naan', 'Creamy and buttery Dal Makhani is one of India\'s most loved dal! This dal has whole black lentils cooked with butter and cream and simmered on low heat for that unique flavor. It tastes best with garlic naan! ', 'Odense', '2021-07-13 12:00:00',12 , 110, now()),
('Vegetable Biryani', 'Vegetable Biryani is a bold and flavorful Indian rice dish with bell peppers, peas, carrots and potatoes in a spiced rice dish made with turmeric, garam masala and other warm spices.', 'Frederiksberg', '2021-07-14 18:00:00', 8, 100, now()),
('Lamb Biryani', 'Indian Lamb Biryani is a casserole of tender lamb curry and fragrant saffron rice. Two outstanding dishes combined into one company worthy casserole. Serve with cooling cucumber raita on the side', 'Aarhus', '2021-07-12 18:30:00', 10, 150, now()),
('Thai Massaman Lamb Curry', 'Massaman lamb curry is a sumptuous dish that\'s rich in both flavor and nutrients. Here the curry sauce is made from scratch for the best flavor and freshness.', 'Copenhagen', '2021-07-8 12:30:00', 8, 150, now()),
('Prawn Thai Green Curry', 'The name "green" curry derives from the color of the dish, which comes from green chillies. ... As this is a Thai curry based on coconut milk and fresh green chillies, the color comes out creamy mild green in which the sumptuous praws are cooked.', 'Copenhagen', '2021-07-15 12:30:00', 12, 150, now());

INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
 values (5, now(), '91357857','Redford Dibdall', 'rdibdall0@spotify.com', 1),
 (6, now(), '89152584','Currey Yegoshin', 'cyegoshin1@phoca.cz', 2),
 (4, now(), '68726795','Shane Peyto',  'speyto2@chronoengine.com',3),
 (6, now(), '34328450','Dione Tax',  'dtax3@harvard.edu', 4),
 (3, now(), '10730873','Dorie Beautyman',  'dbeautyman4@google.ca', 5),
 (2, now(),'43580083', 'Flore De Gregoli',  'fdegregoli5@edublogs.org',6),
 (3, now(), '81214295','Kaela Betjes',  'kbetjes6@psu.edu',7),
 (2, now(), '83530369','Frasquito Trill',  'ftrill7@paypal.com',8),
 (3, now(), '66338159','Wallis Antoniazzi',  'wantoniazzi8@imdb.com',9),
 (2, now(), '33777556','Ulberto Brookson',  'ubrookson9@theguardian.com',10),
 (4, now(), '44734881','Gris de-Ancy Willis',  'gdeancywillisb@nydailynews.com',11);
 
 INSERT INTO review(title, description, meal_id, stars)
 VALUES ('Excellent food', 'What a lovely homely expereince. It was food for my soul ', 5, 5), 
 ('Will do it again', 'That was some lovley food: i recommend everone to try it out ', 8, 4), 
 ('Yummy food', 'Really enjoyed the lamb biryani. I hope they do it agaian and I was lovely talking to the host ', 11, 5), 
 ('Cold food', 'Did the enjoy the food so much, as it was almost room temperature, and also a bit too spicy for  my pallatte', 10, 3), 
 ('Delicious Khao Soi', 'It was something I never tried before, but now its one of my favourites. Do try', 8, 5), 
 ('Simply Wow', 'Me and my friends had a lovely expereince here. Food was simply delish', 6, 5), 
 ('Lovely vegetarian ', 'It was delicious ', 4, 4);
 
 -- added unique constraint on email as missed out earlier
  ALTER TABLE reservation 
ADD CONSTRAINT UNIQUE(contact_email);


-- Queries for Meal
-- Get all meals
SELECT meal.title
FROM meal;

-- Add a new meal
INSERT INTO meal (title, description, location, event_day, max_reservations,price, created_date)
VALUES
('Chicken Malai', 'Chicken Malai comes from the northern part of India. It refers to grilled supreme of chicken with ginger, garlic, green chilli, cream-cheese, coriander-stem and cardamom in a creamy white gravy.', 'Copenhagen', '2021-07-10 18:00:00', 15, 130, now());

-- Get a meal with any id, fx 1
SELECT meal.title
FROM meal
WHERE id=2;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET meal.price=110
WHERE id=4;

-- Delete a reservation with any id, fx 1
DELETE 
FROM meal
WHERE id=4;

-- Queries for Reservation
-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
 values (5, now(), '9185421','Harshada Patel', 'hpatel0@spotify.com', 7);
 
 -- Get a reservation with any id, fx 1
 SELECT contact_name AS name
 FROM reservation
 WHERE id =5;
 
 -- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
 UPDATE reservation
 SET number_of_guests =3, meal_id=10
 WHERE id=6;
 
-- Delete a reservation with any id, fx 1
DELETE 
FROM reservation
WHERE id=6;

-- Queries for Review
SELECT review.stars
FROM review;

-- Add a new review
 INSERT INTO review(title, description, meal_id, stars)
 VALUES ('Food for soul', 'Had delicious food with the best host ', 9, 5);

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET meal_id=11
WHERE id=6;

-- Delete a review with any id, fx 1
DELETE 
FROM review
WHERE id=4;
 
 -- Additional queries
 
 INSERT INTO meal (title, description, location, event_day, max_reservations,price, created_date)
VALUES
('Neapolitan Pizza', 'Neapolitan pizza, or pizza Napoletana, is a type of pizza that originated in Naples, Italy. This style of pizza is prepared with simple and fresh', 'Copenhagen', '2021-07-15 11:30:00', 10, 80, now()),
('Thai Red Curry', ' Thai Red curry is a popular Thai dish consisting of red curry paste cooked in coconut milk with meat added, such as chicken, beef, pork, duck or shrimp, or vegetarian protein source such as tofu.', 'Roskilde', '2021-07-13 12:30:00', 12, 130, now()),
('Vegetable Stew', ' Vegetable Stew is a combination of vegetable creamy curry prepared with thick and thin coconut milk and dry spices and served with rice', 'Valby', '2021-07-16 18:30:00', 12, 120, now()),
('Chicken Kadai ', 'Kadai chicken is a delicious, spicy & flavorful dish made with chicken, onions, tomatoes, ginger, garlic & fresh ground spices known as kadai masala.', 'Frederiksberg', '2021-07-14 18:00:00',12 , 110, now());


INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
 VALUES (5, now(), '91352857','Dumbell Shiro', 'dshiro@spotify.com', 15),
 (4, now(), '89152968','Guruwain Kumar', 'gKumar@phoca.cz', 16),
 (3, now(), '67456795','Kyle Bessler',  'kbessler@chronoengine.com',17),
 (2, now(), '34329630','Turdy Ray',  'tRay@harvard.edu', 18);
 
INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id)
 VALUES (9, now(), '91358597','Biju Sambhar', 'bsambhar@spotify.com', 17);
 


 INSERT INTO review(title, description, meal_id, stars)
 VALUES ('Excellent food', 'What a lovely homely expereince. It was food for my soul ', 15, 5), 
 ('Will do it again', 'That was some lovley food: i recommend everone to try it out ', 16, 4), 
 ('Yummy food', 'It was good, but not the best ', 17, 3),
  ('It was average', 'It was average. The food had no flavour ', 17, 2);
  
-- Get meals that has a price smaller than a specific price fx 90
SELECT meal.title, meal.price
FROM meal
WHERE price<90;

-- Get meals that still has available reservations
SELECT meal.id, meal.title, meal.max_reservations AS max_guests, SUM(reservation.number_of_guests) AS total_reserved
FROM meal
INNER JOIN reservation ON meal.id = reservation.meal_id
GROUP BY meal.title
HAVING total_reserved < max_guests;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT title
FROM meal
WHERE title LIKE "Chicken%";

-- Get only specific number of meals fx return only 5 meals
SELECT title, description
FROM meal 
LIMIT 5;

-- Get meals that has been created between two dates
SELECT meal.title, reservation.created_date AS created_on
FROM menu
INNER JOIN reservation ON meal.id = reservation.meal_id
WHERE created_on > 

-- SELECT column_name(s)-- FROM table_name
--  WHERE column_name BETWEEN value1 AND value2;

-- Get the meals that have good reviews
SELECT meal.title, review.stars
FROM meal
INNER JOIN review ON meal.id = review.meal_id
WHERE stars > 4;

-- Get reservations for a specific meal sorted by created_date
SELECT meal.title AS name, reservation.created_date AS created_on
FROM meal 
INNER JOIN reservation ON meal.id = reservation.meal_id
ORDER BY created_on DESC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars)
FROM meal 
INNER JOIN review ON meal.id = review.meal_id
GROUP BY meal.title
ORDER BY review.stars DESC;

