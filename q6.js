db.employees.find(
    {department:"IT"}
)

db.employees.find(
    {department:"IT",salary:{$gt:2000}}
)

db.employees.find(
    {$and:[{department:"IT"},{salary:{$gt:2000}}]}
)

db.employees.find(
    {$or:[{department:"IT"},{salary:{$gt:2000}}]},
    {name:1,email:1,department:1}
)