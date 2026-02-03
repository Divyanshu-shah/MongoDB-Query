db.employees.find(
    {department:{$in:["IT"]}}
)

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$set:{department:"Admin"}}
)

db.employees.find(
    {department:{$nin:["IT"]}} 
)

db.createCollection("students") // creates a new collection named "students"

db.students.renameCollection("mystudents") // renames the collection named "students" to "mystudents"

db.mystudents.drop() // drops the collection named "mystudents"

db.dropDatabase("lpu26a") // drops the database named "lpu26a"

