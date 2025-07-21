CREATE DATABASE pick_n_steal;
USE pick_n_steal;

CREATE TABLE employees(
	employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);

INSERT INTO employees (employee_id,first_name,last_name,email,phone_number,department,salary)
VALUES  (1,'John','Doe','johm.doe@example.com','555-1234','Engineering',85000.00),
		(2,'Jane','Smith','jane.smith@example.com','555-5678','Marketing',92000.00),
        (3,'Micheal','Johnson','micheal.johnson@example.com','555-8765','Human Resources',75000.00),
        (4,'Emily','Davis','emily.davis@example.com','555-4321','Sales',78000.00);

