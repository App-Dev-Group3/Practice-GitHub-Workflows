INSERT INTO users (full_name, profile_picture, department_name, email, password, role)
VALUES ('John Doe', 'https://example.com/profile1.jpg', 'Computer Science', 'john.doe@email.com', 'hashed_password', 'user'),
('Jane Smith', 'https://example.com/profile2.jpg', 'Mathematics', 'jane.smith@email.com', 'hashed_password', 'user');

INSERT INTO documents (user_id, title, document_type, status)
VALUES (1, 'Enrollment Form', 'PDF', 'pending'),
(2, 'Student ID', 'IMAGE', 'pending');

INSERT INTO notification_types (type_name)
VALUES ('Document Approved'),
('Document Rejected');

INSERT INTO notifications (user_id, type_id, message)
VALUES (1, 1, 'Your document "Enrollment Form" has been approved.'),
(2, 2, 'Your document "Student ID" has been rejected. Please resubmit.');

INSERT INTO audit_action_types (action_name)
VALUES ('Created'),
('Deleted'),
('Signed');

INSERT INTO audit_logs (user_id, action_type, document_id)
VALUES (1, 1, 1),
(2, 1, 2),
(1, 3, 1);
