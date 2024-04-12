-- Deploy beecoming_test:data to pg

BEGIN;

INSERT INTO "cities" (name, country, latitude, longitude, population, language, currency, image) 
OVERRIDING SYSTEM VALUE VALUES 
('Paris', 'France', 48.8566, 2.3522, '2161000', 'French', 'Euro (€)', 'assets/images/cities/paris.jpeg'),
('Tokyo', 'Japon', 35.6895, 139.6917, '13515271', 'Japanese', 'Japanese Yen (¥)', 'assets/images/cities/tokyo.jpg'),
('Canberra', 'Australie', -35.2809, 149.13, '426704', 'English', 'Australian Dollar (A$)', 'assets/images/cities/canberra.jpeg'),
('Ottawa', 'Canada', 45.4215, -75.6972, '994837', 'English, French', 'Canadian Dollar (C$)', 'assets/images/cities/ottawa.jpg'),
('Brasília', 'Brésil', -15.8267, -47.9218, '3055149', 'Portuguese', 'Brazilian Real (R$)', 'assets/images/cities/brasilia.jpg');

COMMIT;
