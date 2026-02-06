db.createCollection("vendors")


db.vendors.insertOne({
    name:"Tom",
    age:21
})


db.vendors.insertOne({
    age:21
})


db.vendors.insertOne({
    name:12345,
    age:"dsfdsf"
})


db.createCollection("vendors",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","age"]
        }
    }
})


db.createCollection("vendors",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","age"],
            properties:{
                name:{
                    bsonType:"string",
                },
                age:{
                    bsonType:"int",
                }
            }
        }
    }
})


db.createCollection("vendors",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","age"],
            properties:{
                name:{
                    bsonType:"string",
                },
                age:{
                    bsonType:"int",minimum:18,
                }
            }
        }
    }
})


db.vendors.insertOne({
    name:"Ram",
    age:22
})