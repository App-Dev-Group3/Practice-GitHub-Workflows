INSERT INTO users (username, email, password, role)
VALUES
('admin', 'admin@email.com', '123456', 'admin'),
('user1', 'user@email.com', '123456', 'user');


INSERT INTO documents (user_id, title, document_type)
VALUES
(1, 'Enrollment Form', 'PDF'),
(2, 'Student ID', 'IMAGE');