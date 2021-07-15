SELECT p.name, f.name FROM products AS p 
RIGHT JOIN providers AS F 
ON p.id_providers = f.id 
WHERE id_categories = (SELECT id FROM categories AS c WHERE id = '6');