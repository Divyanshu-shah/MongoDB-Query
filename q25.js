// Create folder dbshards

// create folders conf, confr, s1, s1r, s2, s2r

// inside dbshards

// Note: These 6 folders represent servers

// located in 6 different locations or countries

// mongod --configsvr -replSet cf --dbpath "C:\Users\INFINIX\Desktop\dbshards\conf" --port 27018

// mongod --configsvr -replSet cf --dbpath "C:\Users\INFINIX\Desktop\dbshards\confr" --port 27019

// mongosh --port 27018

rs.initiate({
  _id: "cf",
  members: [
    { _id: 0, host: "localhost:27018" },
    { _id: 1, host: "localhost:27019" },
  ],
});

rs.config()

rs.status()

// mongod --shardsvr -replSet s1 --dbpath "C:\Users\INFINIX\Desktop\dbshards\s1" --port 27020

// mongod --shardsvr -replSet s1 --dbpath "C:\Users\INFINIX\Desktop\dbshards\s1r" --port 27021

// mongosh --port 27020

rs.initiate({
  _id: "s1",
  members: [
    { _id: 0, host: "localhost:27020" },
    { _id: 1, host: "localhost:27021" },
  ],
});

rs.config()

rs.status()

// mongod --shardsvr -replSet s2 --dbpath "C:\Users\INFINIX\Desktop\dbshards\s2" --port 27022

// mongod --shardsvr -replSet s2 --dbpath "C:\Users\INFINIX\Desktop\dbshards\s2r" --port 27023

// mongosh --port 27022

rs.initiate({
  _id: "s2",
  members: [
    { _id: 0, host: "localhost:27022" },
    { _id: 1, host: "localhost:27023" },
  ],
});

rs.config()

rs.status()

// new tab

// mongos --configdb cf/localhost:27018,localhost:27019 --port 27050

// new tab

// mongosh --port 27050

sh.addShard("s1/localhost:27020,localhost:27021")

sh.addShard("s2/localhost:27022,localhost:27023")

sh.status()

// use icici

sh.enableSharding("icici")

sh.shardCollection("icici.customers",{_id:1})

sh.getShardedDataDistribution()

// show collections

// db.customers.insertOne({_id:1,name:"customer1"})yy

// use config

for(let i=90001;i<=100000;i++){
    db.customers.insertOne({
        _id:i,
        name:"customer"+i
    })
}

db.settings.updateOne(
  { _id: "chunksize" },
  { $set: { value: 1 } },
  { upsert: true }
)

//db.getMongo().readPref("secondary")


for(let i=10001;i<=500000;i++){
    db.customers.insertOne({
        _id:i,
        name:"customer"+i
    })
}
