SELECT p.name FROM products p JOIN providers f ON p.id_providers = f.id WHERE f.name LIKE 'P%' AND p.amount BETWEEN '10' AND '20';