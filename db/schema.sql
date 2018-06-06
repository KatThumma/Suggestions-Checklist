DROP DATABASE IF EXISTS suggestions_db;
CREATE DATABASE suggestions_db;
USE suggestions_db;

-- Create the table.
CREATE TABLE suggestions
(
id int NOT NULL AUTO_INCREMENT,
suggestion_name varchar(255) NOT NULL,
completed_task BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);