UPDATE vehicles SET owner_id = $2 WHERE vehicles.id = $1
RETURNING *;