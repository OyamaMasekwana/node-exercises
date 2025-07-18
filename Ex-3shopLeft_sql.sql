CREATE DATABASE shopleft_database;

USE shopleft_database;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);

CREATE TABLE products (
    product_code VARCHAR(100) PRIMARY KEY,
    product_name VARCHAR(100),
    product_price DECIMAL(10, 2),
    product_quantity INT
);

INSERT INTO users (first_name,last_name,email,password)
VALUES  ('Matthew','Brown','matthew@lifechoices.co.za','matthewbrown'),
		('Likhona','Benayo','likhona@lifechoices.co.za','password123');
        
INSERT INTO products (product_code,product_name,product_price,product_quantity)
VALUES ('bar01','Bar One',9.99,20),
	   ('hand1','Handy Andy',19.00,5),
       ('pota1','Potatoes',38.99,10),
       ('carr1','Carrots',14.00,8),
       ('dish1','DishWasher',25.50,4),
       ('egg1','Eggs',36.40,2);