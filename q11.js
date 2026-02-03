db.employees.aggregate(
    [
        {},
        {},
        {}
    ]
)


db.employees.aggregate(
    [
        {$match:{department:"HR"}}
    ]
)


db.employees.aggregate(
    [
        {$project:{name:1}}
    ]
)


db.employees.aggregate(
    [
        {$project:{_id:0,name:1}}
    ]
)


db.employees.aggregate(
    [
        {$project:{_id:0,department:0,salary:0}}
    ]
)


db.employees.find(
    {},
    {_id:0,name:0}
)


db.employees.find(
    {},
    {_id:0,name:0,email:0}
)


db.employees.aggregate(
    [
        {$sort:{name:1}}
    ]
)


db.employees.aggregate(
    [
        {$skip:1}
    ]
)


db.employees.aggregate(
    [
        {$limit:3}
    ]
)