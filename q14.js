// flipkart database

// use flipkart
db.createCollection("users")
// show collections


db.users.insertMany([{name:"abc",email:"abc@gmail.com",pssword:"12345"},
    {name:"def",email:"def@gmail.com",pssword:"56789"},
    {name:"xyz",email:"xyz@gmail.com",pssword:"13579"}
])


db.users.aggregate(
    [
        {$sort:{name:1}},
        {$project:{_id:0,name:1,email:1}}
    ]
)


db.users.getIndexes()


db.users.createIndex(
  { email: 1 },
)
