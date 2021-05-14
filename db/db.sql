
-- +--------------------+
-- | Tables_in_hospital |
-- +--------------------+
-- | appointments       |
-- | contact            |
-- | covid              |
-- | dashboard          |
-- | patients           |
-- | physicians         |
-- +--------------------+

-- CREATE DATABASE hospital;
USE hospital;


-- ///////////////////////////////////////////////////////////////////////////////////////////

-- PHYSICIANS
-- +---------------+-------------+------+-----+---------+----------------+
-- | Field         | Type        | Null | Key | Default | Extra          |
-- +---------------+-------------+------+-----+---------+----------------+
-- | physicians_id | tinyint     | NO   | PRI | NULL    | auto_increment |
-- | first_name    | varchar(30) | YES  |     | NULL    |                |
-- | last_name     | varchar(30) | YES  |     | NULL    |                |
-- | specialty     | varchar(50) | YES  |     | NULL    |                |
-- | photo         | varchar(50) | YES  |     | NULL    |                |
-- | gender        | varchar(10) | YES  |     | NULL    |                |
-- | telephone     | varchar(15) | YES  |     | NULL    |                |
-- | education     | varchar(40) | YES  |     | NULL    |                |
-- | office        | varchar(10) | YES  |     | NULL    |                |
-- | info          | text        | YES  |     | NULL    |                |
-- +---------------+-------------+------+-----+---------+----------------+


-- DROP TABLE physicians;

-- CREATE TABLE physicians(
--     physicians_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     suffix VARCHAR(5),
--     specialty VARCHAR(50),
--     photo VARCHAR(50),
--     gender VARCHAR(10),
--     telephone VARCHAR(15),
--     education VARCHAR(40),
--     office VARCHAR(10),
--     info TEXT
-- );


-- INSERT INTO physicians (first_name, last_name, suffix, specialty, photo, gender, telephone,education, office, info)
-- VALUES  ('steven'   , 'santiago', 'M.D.', 'podiatry'                , 'face-1.jpg' , 'male'  , '257-852-6428', 'rock universiry',                   'e5954',  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('jan'      , 'sharp'   , 'M.D.', 'nephrology'              , 'face-2.jpg' , 'female', '459-821-4896', 'maine medical college',             'e694',   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('joy'      , 'mckenzie', 'M.D.', 'pulmonology'             , 'face-3.jpg' , 'female', '125-548-9658', 'st. john medical college',          'f3564',  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('sophie'   , 'mccormik', 'M.D.', 'general surgery'         , 'face-4.jpg' , 'female', '128-745-3654', 'springfield university',            'e9633',  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('dave'     , 'morrison', 'D.O.', 'neurosurgery'            , 'face-5.jpg' , 'male'  , '456-852-6479', 'blue mountain state university',    'f65',    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('leigh'    , 'morton'  , 'D.O.', 'internal medicine'       , 'face-6.jpg' , 'female', '945-614-7526', 'monsters school of medicine',       'e123',   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('jamie'    , 'rodgers' , 'M.D.', 'urology'                 , 'face-7.jpg' , 'female', '845-319-7425', 'empire state university',           'h741',   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('horace'   , 'roberts' , 'M.D.', 'anesthesiology'          , 'face-8.jpg' , 'male'  , '345-542-6248', 'fair college',                      'g12521', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('clara'    , 'burke'   , 'D.O.', 'maternal, fetal medicine', 'face-9.jpg' , 'female', '545-758-8524', 'empire medical school',             'e5677',  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('geneva'   , 'curtis'  , 'M.D.', 'cardiology'              , 'face-10.jpg', 'female', '914-536-7428', 'greendale school of medicine',      'f964',   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('meghan'   , 'brewer'  , 'M.D.', 'gastroenterology'        , 'face-11.jpg', 'female', '345-635-4896', 'pennyham state university',         'g14',    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('vernon'   , 'owens'   , 'M.D.', 'family medicine'         , 'face-12.jpg', 'male'  , '354-965-7485', 'hudson medical school',             'e8699',  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('lynn'     , 'greene'  , 'M.D.', 'pediatrics'              , 'face-13.jpg', 'female', '384-962-7484', 'quohog health sciences university', 'f1478',  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('heather'  , 'sherman' , 'D.O.', 'internal medicine'       , 'face-14.jpg', 'female', '504-365-9757', 'city university',                   'g574',   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('johnathan', 'erikson' , 'M.D.', 'gynecology'              , 'face-15.jpg', 'male'  , '364-242-1585', 'cool state university',             'e469',   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('joe'      , 'chandler', 'D.O.', 'dermatology'             , 'face-16.jpg', 'male'  , '125-458-6585', 'medical college of hill valley',    'h496',   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
--         ('angeline' , 'collins' , 'D.O.', 'neurology'               , 'face-17.jpg', 'female', '852-456-9517', 'ross medical college',              'h9677',  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.');

-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////

-- PATIENTS
-- +------------+-------------+------+-----+---------+----------------+
-- | Field      | Type        | Null | Key | Default | Extra          |
-- +------------+-------------+------+-----+---------+----------------+
-- | patient_id | tinyint     | NO   | PRI | NULL    | auto_increment |
-- | first_name | VARCHAR(30) | YES  |     | NULL    |                |
-- | last_name  | VARCHAR(30) | YES  |     | NULL    |                |
-- | gender     | VARCHAR(15) | YES  |     | NULL    |                |
-- | height     | smallint    | YES  |     | NULL    |                |
-- | weight     | smallint    | YES  |     | NULL    |                |
-- | dob        | date        | YES  |     | NULL    |                |
-- +------------+-------------+------+-----+---------+----------------+

-- DROP TABLE patients;

-- CREATE TABLE patients(
--     patient_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     gender VARCHAR(15),
--     height SMALLINT,
--     weight SMALLINT,
--     dob DATE
-- );


-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////

-- APPOINTMENTS
-- +--------------------+-------------+------+-----+---------+----------------+
-- | Field              | Type        | Null | Key | Default | Extra          |
-- +--------------------+-------------+------+-----+---------+----------------+
-- | appointment_id     | tinyint     | NO   | PRI | NULL    | auto_increment |
-- | patient_first_name | varchar(30) | YES  |     | NULL    |                |
-- | patient_last_name  | varchar(30) | YES  |     | NULL    |                |
-- | physicians_id      | int         | YES  |     | NULL    |                |
-- | appointment_date   | date        | YES  |     | NULL    |                |
-- | insurance          | varchar(20) | YES  |     | NULL    |                |
-- | telephone          | varchar(15) | YES  |     | NULL    |                |
-- | comments           | text        | YES  |     | NULL    |                |
-- | height             | smallint    | YES  |     | NULL    |                |
-- | weight             | smallint    | YES  |     | NULL    |                |
-- +--------------------+-------------+------+-----+---------+----------------+



-- DROP TABLE appointments;

-- CREATE TABLE appointments(
--     appointment_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     patient_first_name VARCHAR(30) NOT NULL,
--     patient_last_name VARCHAR(30) NOT NULL,
--     physicians_id INT NOT NULL,
--     appointment_date DATE NOT NULL,
--     insurance VARCHAR(20) NOT NULL,
--     telephone VARCHAR(15) NOT NULL,
--     comments TEXT,
--     height SMALLINT,
--     weight SMALLINT
-- );

-- INSERT INTO appointments (patient_first_name, patient_last_name, physicians_id, appointment_date, insurance, telephone, comments, height, weight)
--     VALUES  ('ian', 'warner', 4, '2021-01-12', 'saviors covered', '414-965-7854', 'i need a new eye', 60, 180);


-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////


-- dashboard

-- +------------+-------------+------+-----+---------+----------------+
-- | Field      | Type        | Null | Key | Default | Extra          |
-- +------------+-------------+------+-----+---------+----------------+
-- | section_id | tinyint     | NO   | PRI | NULL    | auto_increment |
-- | heading    | varchar(30) | NO   |     | NULL    |                |
-- | body       | text        | NO   |     | NULL    |                |
-- +------------+-------------+------+-----+---------+----------------+

-- DROP TABLE dashboard;

-- CREATE TABLE dashboard(
--     section_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     heading VARCHAR(30) NOT NULL,
--     body TEXT NOT NULL,
--     link VARCHAR(20)
-- );

-- INSERT INTO dashboard (heading, body, link)
-- VALUES  ('find a doctor', 'Find the doctor who’s right for you. We are staffed by the nation’s top physicians.', 'physicians'),
--         ('COVID-19'     , 'COVID-19 vaccinations for are available at no cost. The General Hospital will allow one visitor per day for inpatients and those in our Emergency Department.', 'covid'),
--         ('appointments' , "Find the doctor who’s right for you. The General is staffed by the nation's top physicians.", 'appointments'),
--         ('find a doctor', "Find the doctor who’s right for you. We are staffed by the nation's top physicians." , 'physicians');


-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////

-- covid
 
-- +-------------+-------------+------+-----+---------+----------------+
-- | Field       | Type        | Null | Key | Default | Extra          |
-- +-------------+-------------+------+-----+---------+----------------+
-- | section_id  | tinyint     | NO   | PRI | NULL    | auto_increment |
-- | heading_one | varchar(30) | YES  |     | NULL    |                |
-- | heading_two | varchar(30) | YES  |     | NULL    |                |
-- | text_one    | text        | YES  |     | NULL    |                |
-- | text_two    | text        | YES  |     | NULL    |                |
-- | text_three  | text        | YES  |     | NULL    |                |
-- | text_four   | text        | YES  |     | NULL    |                |
-- | image_one   | varchar(20) | YES  |     | NULL    |                |
-- | image_two   | varchar(20) | YES  |     | NULL    |                |
-- +-------------+-------------+------+-----+---------+----------------+


-- DROP TABLE covid;

-- CREATE TABLE covid(
--     section_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     heading_one VARCHAR(30),
--     heading_two VARCHAR(30),
--     text_one TEXT,
--     text_two TEXT,
--     text_three TEXT,
--     text_four TEXT,
--     image_one VARCHAR(20),
--     image_two VARCHAR(20)
-- );

-- INSERT INTO covid (heading_one, heading_two, text_one, text_two, text_three, text_four, image_one, image_two)
-- VALUES  ('Vaccination', 
--         '', 
--         'We encourage you to get vaccinated. COVID-19 vaccinations for are available at no cost from drive-through sites around the state.', 'After you are fully vaccinated for COVID-19, you may be able to start doing some things that you stopped doing because of the pandemic. For example, you can gather indoors without masks with other people who are fully vaccinated', 
--         '', '', '', ''),
--         ('', '', '', '', '', '', 'covid-img-2.jpg', ''),
--         ('Social Distancing', 
--         '', 
--         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quos earum aut delectus ut eligendi odit sapiente nisi quasi.', 
--         'impedit eveniet nisi natus veniam odio iusto tenetur reiciendis assumenda autem molestiae quibusdam.', 
--         '', '', '', '');

-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////

-- contact
 
-- +-------------------+-------------+------+-----+---------+----------------+
-- | Field             | Type        | Null | Key | Default | Extra          |
-- +-------------------+-------------+------+-----+---------+----------------+
-- | id                | int         | NO   | PRI | NULL    | auto_increment |
-- | person_first_name | varchar(30) | NO   |     | NULL    |                |
-- | person_last_name  | varchar(30) | YES  |     | NULL    |                |
-- | email             | varchar(30) | NO   |     | NULL    |                |
-- | message           | text        | YES  |     | NULL    |                |
-- +-------------------+-------------+------+-----+---------+----------------+

-- DROP TABLE contact;

-- CREATE TABLE contact(
--     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     person_first_name VARCHAR(30) NOT NULL,
--     person_last_name VARCHAR(30),
--     email VARCHAR(30) NOT NULL,
--     message TEXT
-- );

-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////////////////////