# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies

Your application must make use of the following libraries:

-   Postgres for the database
-   Node/Express for the application logic

## Steps to Install

-   Clone the repo
-   Run `yarn` to install the required libraries
-   Create new .env file in the root directory
-   Put your database credentials in the .env file ( POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, ENV='dev', POSTGRES_DB_TEST )
-   Put JWT secret in the .env file ( JWT_SECRET )
-   The app port is 3000 and the database port is 5432
-   Run `yarn watch` to start the application
-   Run `yarn test` to run the tests

## Setup database

-   Create a new postgres database
-   You can use docker-compose up to create the database
-   Run `yarn add global db-migrate` to install migrate package
-   Run `db-migrate up` to create the tables
-   CREATE USER <username> WITH PASSWORD '<password>';
-   CREATE DATABASE <database>;
-   CREATE DATABASE <database_TEST>;
-   GRANT ALL PRIVILEGES ON DATABASE <database> TO <username>;
-   GRANT ALL PRIVILEGES ON DATABASE <database_TEST> TO <username>;

## Environment Variables

-   POSTGRES_DB
-   POSTGRES_DB_TEST
-   POSTGRES_USER
-   POSTGRES_PASSWORD
-   ENV = 'dev'
-   JWT_SECRET

## Endpoints

-   GET /v1/products
-   GET /v1/products/:id
-   POST /v1/products [token required]
-   GET /v1/user/ [token required]
-   GET /v1/user/:id [token required]
-   POST /v1/user/
-   GET /v1/orders/ [token required]
