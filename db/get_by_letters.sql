SELECT * FROM vehicles WHERE owner_id = (SELECT id FROM users WHERE name SIMILAR TO $1);
-- SELECT * FROM vehicles WHERE owner_id = (SELECT id FROM users WHERE name LIKE $1);
