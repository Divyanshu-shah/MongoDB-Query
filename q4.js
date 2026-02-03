db.employees.find({},{})


db.employees.find(
    {department:"IT"}
)


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


db.employees.find().sort(
    {name:1}
)  //sort in ascending order


db.employees.find().sort(
    {name:-1}
) // sort in descending order


db.employees.find().limit(3).skip(1).sort(
    {name:-1}
)


db.employees.find().count()

