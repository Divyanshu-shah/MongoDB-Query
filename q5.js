db.employees.find(
    {department:"IT"}
)


db.employees.find(
    {department:{$eq:"IT"}}
)


db.employees.find(
    {salary:{$eq:2000}}
)


db.employees.find(
    {salary:{$gt:2000}}
)


db.employees.find(
    {salary:{$ne:2000}}
)


db.employees.find(
    {salary:{$lte:2000}}
)