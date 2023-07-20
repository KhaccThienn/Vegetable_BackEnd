Create database vegetable_database;

USE vegetable_database;
CREATE TABLE account 
(
	id int primary key AUTO_INCREMENT,
    name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(100) not null,
    role varchar(50) not null,
    creaed_at date default NOW(),
    last_login datetime default NOW()
);

INSERT INTO account(name, `email`, `password`, `role`) VALUES ('admin','admin@gmail.com','12345','admin');

CREATE TABLE category 
(
	id int primary key AUTO_INCREMENT,
    name varchar(100) not null,
	status tinyint
);
CREATE TABLE product 
(
	id int primary key AUTO_INCREMENT,
    name varchar(120) not null,
	price float not null,
    sale_price float null DEFAULT 0,
    image varchar(200) not null,
    category_id int not null,
    status tinyint null DEFAULT 1,
    description text not null,
    created_at date DEFAULT NOW(),
    FOREIGN KEY (category_id) REFERENCES category(id)
);
CREATE TABLE favourite
(
	id int primary key AUTO_INCREMENT,
    account_id int not null,
    product_id int not null,
    created_id date DEFAULT NOW(),
    FOREIGN KEY (account_id) REFERENCES account(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
)