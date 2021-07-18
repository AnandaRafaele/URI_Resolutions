(SELECT name, customers_number FROM lawyers ORDER BY customers_number DESC FETCH FIRST ROW ONLY)
UNION ALL
(SELECT name, customers_number FROM lawyers ORDER BY customers_number ASC FETCH FIRST ROW ONLY)
UNION ALL
(SELECT 'Average' AS name, ROUND(AVG(customers_number)) AS customers_number FROM lawyers);