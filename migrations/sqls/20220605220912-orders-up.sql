/* Replace with your SQL commands */
CREATE TABLE orders(
    id SERIAL PRIMARY KEY, 
    user_id bigint REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL
);