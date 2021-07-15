SELECT c.name, r.rentals_date FROM rentals AS r
LEFT JOIN customers AS c
ON r.id_customers = c.id
WHERE r.rentals_date BETWEEN '2016-09-01' AND '2016-09-30';