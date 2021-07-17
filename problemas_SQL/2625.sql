SELECT concat(
        substring(cpf, 1, 3), '.',
        substring(cpf, 4, 3), '.',
        substring(cpf, 7, 3), '-',
        substring(cpf, 10)
    )
    AS formatted_cpf
    FROM customers c
    JOIN natural_person n
    ON c.id = n.id_customers;