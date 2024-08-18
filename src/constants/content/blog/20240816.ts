export const TEST_TABLE_DDL = `
CREATE TABLE Customers (
    c_id INT PRIMARY KEY,
    c_name VARCHAR(100) NOT NULL,
    c_email VARCHAR(100) UNIQUE NOT NULL,
    c_phone VARCHAR(20),
    address VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Products (
    p_id INT PRIMARY KEY,
    p_name VARCHAR(100) NOT NULL,
    p_price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    stock_quantity INT NOT NULL DEFAULT 0,
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Orders (
    o_id INT PRIMARY KEY,
    o_date DATE NOT NULL,
    o_total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    c_id INT NOT NULL,
    shipping_address VARCHAR(200),
    payment_method VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE OrderDetails (
    o_d_id INT PRIMARY KEY,
    o_id INT NOT NULL,
    p_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
    discount DECIMAL(10, 2) DEFAULT 0.00
);

INSERT INTO Customers (c_id, c_name, c_email, c_phone, address) VALUES
    (1, 'Noah', 'noah@gmail.com', '111-222-3333', '123 Apple St, New York, NY 10001'),
    (2, 'Kyle', 'kyle@gmail.com', '444-555-6666', '456 Banana Ave, Los Angeles, CA 90001'),
    (3, 'Chuck', 'chuck@gmail.com', '777-888-9999', '789 Cherry Ln, Chicago, IL 60601');

INSERT INTO Products (p_id, p_name, p_price, description, stock_quantity, category) VALUES
    (1, 'iPhone', 10000.00, 'Latest model iPhone with advanced features', 100, 'Electronics'),
    (2, 'iPad', 20000.00, 'Powerful and versatile iPad for work and play', 50, 'Electronics'),
    (3, 'AirPod', 30000.00, 'Wireless earbuds with exceptional sound quality', 200, 'Accessories');

INSERT INTO Orders (o_id, o_date, o_total_amount, status, c_id, shipping_address, payment_method) VALUES
    (1, '2024-08-14', 100000.00, 'Pending', 1, '123 Apple St, New York, NY 10001', 'Credit Card'),
    (2, '2024-08-15', 300000.00, 'Delivered', 2, '456 Banana Ave, Los Angeles, CA 90001', 'PayPal'),
    (3, '2024-08-16', 60000.00, 'Processing', 2, '456 Banana Ave, Los Angeles, CA 90001', 'Debit Card');

INSERT INTO OrderDetails (o_d_id, o_id, p_id, quantity, unit_price, discount) VALUES
    (1, 1, 1, 10, 10000.00, 0.00),
    (2, 2, 1, 10, 10000.00, 0.00),
    (3, 2, 2, 10, 20000.00, 0.00),
    (4, 3, 3, 5, 30000.00, 5000.00);
`;
