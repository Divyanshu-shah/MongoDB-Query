db.employees.find(
    {department:"IT"}
)

db.employees.find(
    {department:"IT",salary:{$gt:2000}}
)
