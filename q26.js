// User management

// use admin

db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [
      { role: "root", db: "admin" }
    ]
  }
)

db.createUser(
  {
    user: "user1",
    pwd: "user1",
    roles:
     [
      { role: "read", db: "lpu26a" }
    ]
  }
)

db.createUser(
  {
    user: "user2",
    pwd: "user2",
    roles:
     [
      { role: "read", db: "lpu26a" }
    ]
  }
)

// mongosh --username user1 --password user1 --authenticationDatabase lpu26a

// mongodb://user1:user1@localhost:27017/lpu26a

// Connnection String 

// mongosh "mongodb://user1:user1@localhost:27017/lpu26a"

// 10.10.10.10 - mongodb

// 10.12.100.1 - node js app

// mongosh "mongodb://10.10.10.10:27017"

// mongosh "mongodb"