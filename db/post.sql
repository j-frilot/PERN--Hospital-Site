-- DROP TABLE physicians;

-- CREATE TABLE physicians(
--     physicians_id SMALLSERIAL PRIMARY KEY NOT NULL,
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
-- VALUES  
--         ('steven'   , 'santiago', 'M.D.', 'podiatry'                , 'face-1.jpg' , 'male'  , '257-852-6428', 'rock universiry',                   'e5954',  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa       molestiae illo laboriosam libero! Itaque unde ex eaque repellendus saepe rem et deleniti rerum nesciunt, aliquam nobis eligendi harum eum minima sed inventore asperiores officiis facilis perferendis quas fuga nostrum omnis dolorum. Odio eligendi ipsa consequatur exercitationem iure numquam aut aliquid.'),
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

------------------------------------------------------------

-- DROP TABLE patients;

-- CREATE TABLE patients(
--     patient_id SMALLSERIAL PRIMARY KEY  NOT NULL,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     gender VARCHAR(15),
--     height SMALLSERIAL,
--     weight SMALLSERIAL,
--     dob DATE
-- );

-- ------------------------------------------------------------

-- DROP TABLE appointments;

-- CREATE TABLE appointments(
--     appointment_id SMALLSERIAL PRIMARY KEY  NOT NULL,
--     patient_first_name VARCHAR(30) NOT NULL,
--     patient_last_name VARCHAR(30) NOT NULL,
--     physicians_id SMALLSERIAL NOT NULL,
--     appointment_date DATE NOT NULL,
--     insurance VARCHAR(20) NOT NULL,
--     telephone VARCHAR(15) NOT NULL,
--     comments TEXT,
--     height SMALLSERIAL,
--     weight SMALLSERIAL
-- );

-- INSERT INTO appointments (patient_first_name, patient_last_name, physicians_id, appointment_date, insurance, telephone, comments, height, weight)
--     VALUES  ('ian', 'warner', 4, '2021-01-12', 'saviors covered', '414-965-7854', 'i need a new eye', 60, 180);

-- ------------------------------------------------------------

-- DROP TABLE dashboard;

-- CREATE TABLE dashboard(
--     section_id SMALLSERIAL PRIMARY KEY NOT NULL,
--     heading VARCHAR(30) NOT NULL,
--     body TEXT NOT NULL,
--     link VARCHAR(20)
-- );

-- INSERT INTO dashboard (heading, body, link)
-- VALUES  
--         ('find a doctor', 'Find the doctor who’s right for you. We are staffed by the nation’s top physicians.'                                                                          , 'physicians'),
--         ('COVID-19'     , 'COVID-19 vaccinations for are available at no cost. The General Hospital will allow one visitor per day for inpatients and those in our Emergency Department.', 'covid'),
--         ('appointments' , 'Find the doctor who’s right for you. The General is staffed by the nation''s top physicians.'                                                                  , 'appointments'),
--         ('find a doctor', 'Find the doctor who''s right for you. We are staffed by the nation''s top physicians.'                                                                         , 'physicians');

-- ------------------------------------------------------------

-- DROP TABLE covid;

-- CREATE TABLE covid(
--     section_id SMALLSERIAL PRIMARY KEY NOT NULL,
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

-- ------------------------------------------------------------

-- DROP TABLE contact;

-- CREATE TABLE contact(
--     id SMALLSERIAL PRIMARY KEY NOT NULL,
--     person_first_name VARCHAR(30) NOT NULL,
--     person_last_name VARCHAR(30),
--     email VARCHAR(30) NOT NULL,
--     message TEXT
-- );

-- ------------------------------------------------------------