CREATE DATABASE shopleft_database;

USE shopleft_database;

CREATE TABLE users(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL,
first_name VARCHAR(45) NOT NULL,
last_name VARCHAR(45) NOT NULL,
password VARCHAR(255) NOT NULL
);

CREATE TABLE products(
product_code VARCHAR(40) PRIMARY KEY NOT NULL,
product_name VARCHAR(45) NOT NULL,
product_price DECIMAL(5,2) NOT NULL,
product_quantity INT NOT NULL
);

INSERT INTO users(email,first_name,last_name,password)
VALUES ('khanyiso@lifechoices.co.za','khanyiso','haman','haman5'),
	   ('oyama@lifechoices.co.za','oyama','masekwana','masekwanaoyama');

INSERT INTO products(product_code,product_name,product_price,product_quantity)
VALUES ('baro1','Bar One',9.99,20),
	   ('hand1','Handy Andy',19.00,5),
       ('pota1','Potatoes',38.99,10),
       ('milk1', 'Full Cream Milk', 25.50, 15),
       ('bread1', 'White Bread', 17.99, 30),
       ('soap1', 'Sunlight Soap', 8.50, 25);