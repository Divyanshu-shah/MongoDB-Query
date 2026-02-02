db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date()
});


db.employees.insertMany([
    {
        name: "John Smith",
        email: "john@gmail.com",
        department: "IT",
        salary: 1456,
        location: ["FL", "OH"],
        date: Date()
    },
    {

        name: "Ronny",
        email: "ronny@gmail.com",
        department: "IT",
        salary: 2000,
        location: ["FL", "OH"],
        date: Date()
    },
    {
        name: "Cathy",
        email: "cathy@gmail.com",
        department: "IT",
        salary: 2500,
        location: ["A2", "TX"],
        date: Date()
    }
]);

