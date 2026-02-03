db.employees.find(
    {location:"FL"}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$push:{location:"AZ"}}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pop:{location:1}}
)


// Create a new field skills and add python as array 

db.employees.updateOne(
    {},
    {$push:{skills:"python"}}
)


db.employees.updateMany(
    {},
    {$push:{skills:"python"}}
)


db.employees.updateMany(
    {},
    {$push:{skills:"java"}}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$push:{skills:".NET"}}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$push:{skills:"python"}}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pop:{skills:1}}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pop:{skills:1}}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$addToSet:{skills:"java"}}
)


db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pull:{skills:"java"}}
)