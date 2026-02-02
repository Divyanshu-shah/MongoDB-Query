db.employees.find({},{})

db.employees.find({department:"IT"})

db.employees.find(
    {department:"IT"},
    {name:1}
)

db.employees.find(
    {department:"IT",salary:2000},
    {name:1,_id:0,salary:1}
)

db.employees.find().limit(3)

db.employees.find().skip(1)

db.employees.find().limit(3).skip(1)