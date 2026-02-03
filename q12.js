db.employees.aggregate(
    [
        {$match:{department:"IT"}},
        {$project:{name:1,email:1}},
        {$sort:{name:1}},
        {$limit:3},
        {$skip:1}
    ]
)


db.employees.aggregate(
    [
        {$skip:1},
        {$sort:{department:1}},
        {$project:{name:1,email:1}},
        {$limit:3},
    ]
)


db.employees.aggregate(
    [
        {
            $group:{_id:"$department",
                    total:{$sum:"$salary"}
            }
        }
    ]
)


db.employees.aggregate(
    [
        {$group:{_id:"$department",
        total:{$sum:"$salary"},
        highest:{$max:"$salary"},
        lowest:{$min:"$salary"},
        average:{$avg:"$salary"}
        }
    },
    ]
)


db.employees.aggregate(
    [
        {$project:{
                _id:0,
                name:1,
                salary:1,
                annualSal:{$multiply:[12,"$salary"]}
            }
        }
    ]
)


