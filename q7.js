db.employees.updateOne({},{})

db.employees.updateOne(
    {email:"cathy@gmail.com"}
    ,{$set:{salary:3500}}
)

db.employees.updateOne(
    {email:"cathy@gmail.com"}
    ,{$inc:{salary:3500}}
)

db.employees.updateMany(
    {}
    ,{$inc:{salary:1000}}
)

db.employees.updateMany(
    {}
    ,{$inc:{points:1}}
)

db.employees.updateOne(
    {email:"ronny@gmail.com"},
    {$set: {points:10}}
)

db.employees.updateOne(
    {email:"abc@gmail.com"},
    {$set: {points:10}},
    {upsert:true}
)

db.employees.find(
    {},
    {name:1}
)

db.employees.deleteOne(
    {email:"abc@gmail.com"}
)

db.employees.deleteMany(
    {email:"abc@gmail.com"}
)

db.employees.updateMany(
    {email:{$in:["cathy@gmail.com","ronny@gmail.com"]}},
    {$inc:{salary:1000}}
)

db.employees.find(
    {name:{$exists:false}}
)

db.employees.find(
    {name:{$exists:true}}
)
