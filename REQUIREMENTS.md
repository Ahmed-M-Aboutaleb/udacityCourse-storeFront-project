# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Product

-   Index
-   Show
-   Create [token required]
-   [OPTIONAL] Top 5 most popular products
-   [OPTIONAL] Products by category (args: product category)

#### User

-   Index [token required]
-   Show [token required]
-   Create N[token required]

#### Order

-   Current Order by user (args: user id)[token required]
-   [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Product

-   id:String (optional) [Auto-generated]
-   name: String
-   price: Number

#### User

-   id:String (optional) [Auto-generated]
-   firstname: String
-   lastname: String
-   password: String

#### Orders

-   id (optional) [Auto-generated]
-   user_id: Number
-   status of order: String (pending or complete)

### Order Products

-   id (optional) [Auto-generated]
-   order_id: Number
-   product_id: Number
-   quantity: Number
