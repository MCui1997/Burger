-- Create database 
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);