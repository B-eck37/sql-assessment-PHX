SELECT * FROM vehicles WHERE owner_id = (SELECT id FROM users WHERE users.name LIKE '%' || $1 || '%');
-- SELECT * FROM vehicles WHERE owner_id = (SELECT id FROM users WHERE name = $1);
-- SELECT * FROM vehicles WHERE owner_id = (SELECT id FROM users WHERE users.email = $1);
-- SELECT * FROM vehicles;