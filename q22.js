db.employees.find({
    name:"cathy"
})


db.employees.find({
    name:{$regex:"John",$options:"i"}
})


db.employees.find({
    name:{$regex:"J"}
})


db.employees.find({
    name:{$regex:"^S",$options:"i"}
})

