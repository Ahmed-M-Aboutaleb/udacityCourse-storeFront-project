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

## Endpoints

-   GET /v1/products
-   GET /v1/products/:id
-   POST /v1/products [token required]
-   GET /v1/user/ [token required]
-   GET /v1/user/:id [token required]
-   POST /v1/user/
-   GET /v1/orders/ [token required]
