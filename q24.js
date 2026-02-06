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
