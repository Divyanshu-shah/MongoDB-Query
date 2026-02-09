// create folder mongo replica
// create folders - usa, uk, india
// inside mongo replica folder 

// mongod -replSet rs1 --dbpath "C:\Users\INFINIX\Desktop\Mongo-Replica\usa" --port 27018

// mongod -replSet rs1 --dbpath "C:\Users\INFINIX\Desktop\Mongo-Replica\uk" --port 27019

// mongod -replSet rs1 --dbpath "C:\Users\INFINIX\Desktop\Mongo-Replica\india" --port 27020

// mongosh --port 27018


rs.initiate(
    {
        _id: "rs1",
        members: [
            { _id: 0, host: "localhost:27018" },
            { _id: 1, host: "localhost:27019" },
            { _id: 2, host: "localhost:27020" }
        ]
    }
)


// rs.config()

// rs.status()

// new tab

// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// use mydatabase

// db.users.insertOne({ name: "Bolt", age: 30 })

// db.getMongo().setReadPref("secondary")


// mongosh --port 27019

// db.getMongo().setReadPref("secondary")

// use mydatabase

// db.users.find()


//mongosh --port 27020

// db.getMongo().setReadPref("secondary")

// use mydatabase

// db.users.find()

// db.shutdownServer()

// for(let i=0; i<100; i++) { db.users.insertOne({ name: "Users", age: 30 }) }

// db.countDocuments("users")





// ------------------------------------------------------------------------------------------------


// new terminal

// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// use hdfcbank

db.customers.insertOne(
    {_id:"c1",name:"Potter",balance:1000}
)

db.customers.insertOne(
    {_id:"c2",name:"Mike",balance:1000}
)

const session = db.getMongo().startSession()

session.startTransaction()

const custCollection = session.getDatabase("hdfcbank").customers

custCollection.updateOne(
  { _id: "c1" },
  { $inc: { balance: -100 } }
)

custCollection.updateOne(
  { _id: "c2" },
  { $inc: { balance: 100 } }
)

session.commitTransaction()

session.endSession()
