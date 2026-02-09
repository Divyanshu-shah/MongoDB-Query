// --------------------------------Sharding--------------------------------

// create folder dbshards
// create folders conf,confr,s1,s1r,s2,s2r
// inside dbshards
// Note: These 6 folders represent servers
// located in 6 different locations or countries

// mongod --configsvr --replSet cf --dbpath "C:\Users\INFINIX\Desktop\dbshards\conf" --port 27018

// mongod --configsvr --replSet cf --dbpath "C:\Users\INFINIX\Desktop\dbshards\confr" --port 27019

// mongosh --port 27018

rs.initiate(
    {
        _id: "cf",
        members: [
            { _id: 0, host: "localhost:27018" },
            { _id: 1, host: "localhost:27019" }
        ]
    }
)

// rs.config()

// rs.status()

// mongod --shardsvr --replSet s1 --dbpath "C:\Users\INFINIX\Desktop\dbshards\s1" --port 27020

// mongod --shardsvr --replSet s1 --dbpath "C:\Users\INFINIX\Desktop\dbshards\s1r" --port 27021

// mongosh --port 27020

rs.initiate(
    {
        _id: "s1",
        members: [
            { _id: 0, host: "localhost:27020" },
            { _id: 1, host: "localhost:27021" }
        ]
    }
)

// rs.config()

// rs.status()

// mongod --shardsvr --replSet s2 --dbpath "C:\Users\INFINIX\Desktop\dbshards\s2" --port 27022

// mongod --shardsvr --replSet s2 --dbpath "C:\Users\INFINIX\Desktop\dbshards\s2r" --port 27023

// mongosh --port 27022

rs.initiate(
    {
        _id: "s2",
        members: [
            { _id: 0, host: "localhost:27022" },
            { _id: 1, host: "localhost:27023" }
        ]
    }
)

// rs.config()

// rs.status()


