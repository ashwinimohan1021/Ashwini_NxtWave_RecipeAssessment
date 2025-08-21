CREATE DATABASE IF NOT EXISTS recipes_db;
USE recipes_db;

CREATE TABLE IF NOT EXISTS recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cuisine VARCHAR(100),
  title VARCHAR(255),
  rating FLOAT,
  prep_time INT,
  cook_time INT,
  total_time INT,
  description TEXT,
  nutrients JSON,
  serves VARCHAR(50)
);
