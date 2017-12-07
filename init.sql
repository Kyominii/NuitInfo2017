USE ndli;

CREATE TABLE addresses (
    id INT NOT NULL AUTO_INCREMENT,
    address VARCHAR(255) NOT NULL,
    postcode VARCHAR(12) NOT NULL,
    city VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    pseudo VARCHAR(30) NOT NULL,
    profil_image VARCHAR(50) NOT NULL,
    address_id INT NOT NULL,
    phone_number VARCHAR(12) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(address_id) REFERENCES addresses(id)
);

CREATE TABLE cars (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    capacity INT NOT NULL,
    brand VARCHAR(20) NOT NULL,
    available INT(1) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE reviews (
  	id INT NOT NULL AUTO_INCREMENT,
  	user_id INT NOT NULL,
    review TEXT NOT NULL,
    score TINYINT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

USE ndli;

CREATE TABLE tips(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    amount INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE rides(
    id INT NOT NULL AUTO_INCREMENT,
    address_from_id INT NOT NULL,
    address_to_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(address_from_id) REFERENCES addresses(id),
    FOREIGN KEY(address_to_id) REFERENCES addresses(id)
);
