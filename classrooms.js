var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }]

  var students = [];
  var teachers = [];
  var litStudents = [];
  for (var i = 0; i < classrooms.length; i++) {
    students = students.concat(classrooms[i].students)
    teachers.push(classrooms[i].teacher)
    if (classrooms[i].teacher.subject === "Literature") litStudents = litStudents.concat(classrooms[i].students)
  }

  console.log(students.reduce(function(accu, curr) {return accu + curr.age}, 0)/students.length);
  console.log(teachers.reduce(function(accu, curr) {return accu + curr.age}, 0)/teachers.length);
  console.log(litStudents.length)
