db.employees.find(
    {email:"smith@gmail.com"}
)


db.employees.find(
    {email:"smith@gmail.com"} 
).explain("executionStats")


db.employees.createIndex({email:1})


db.employees.getIndexes()


db.employees.find({},{_id:0,name:1}).sort({name:1})


db.employees.find({},{_id:0,name:1}).collation({locale:'en',strength:2}).sort({name:1})
