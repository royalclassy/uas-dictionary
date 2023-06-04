<h1 align="center">Welcome to uas-dictionary 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This project is an online website dictionary developed for our final assignment. It allows users to search for word definitions and discover their synonyms. The website provides a user-friendly interface where individuals can easily input a word and obtain its meaning along with related synonyms. The aim of this project is to provide a convenient and comprehensive tool for users to enhance their vocabulary and find alternative words with similar meanings.

## Installation
This project is a monorepo project consisting of two parts that need to be installed: the backend side and the frontend side.

### Front End
```sh
cd frontend
npm install
```

### Back End
```sh
cd backend
npm install
```
On its backend, it uses MySQL as its database, so you need to configure your MySQL connection to use this project. Go to the database.js file and set your own username and password.

After that, you need to create a database called 'uas_dictionary' which consists of 2 tables: 'user' and 'history'.


```sh
create database uas_dictionary
use uas_dictionary

CREATE TABLE history (
  historyID INT(11) AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(16),
  keyword VARCHAR(100),
  date TIMESTAMP
);

CREATE TABLE user (
  username VARCHAR(16) PRIMARY KEY,
  password VARCHAR(16)
);

```

## Author

👤 **royalclassy**
👤 **kurniakun17**

* Github: [@royalclassy](https://github.com/royalclassy) [@kurniakun17](https://github.com/kurniakun17)
* LinkedIn: [@Esterlita Nugraheni P](https://www.linkedin.com/in/esterlitanp/?originalSubdomain=id) [@Kurnia Kharisma AS](https://www.linkedin.com/in/kurnia-kharisma-agung-samiadjie-88b54a224/)


## Show your support

Give a ⭐️ if this project helped you!

