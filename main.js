var a = new Student("Gerard", "Llorach", 89);

var fullname = a.getFullName();


// Define an array
var studentsData = [
    {
        name: "Gerard",
        surname: "Llorach",
        age: 89
    },
    {
        name: "Eva",
        surname: "Garolera",
        age: 55
    },
    {
        name: "Josep",
        surname: "Blat",
        age: 70
    },
    {
        name: "Ricardo",
        surname: "Marqués",
        age: 40
    },
    {
        name: "Victor",
        surname: "Ubieto",
        age: 26
    }
];

var students = [];

for (var i = 0; i < studentsData.length; i++) {
    students.push(new Student(studentsData[i].name, studentsData[i].surname, studentsData[i].age));
}

// Create students container
var studentsContainer = document.createElement('div');
studentsContainer.classList.add("students-container");

// Create students elements
for (var i = 0; i < students.length; i++) {
    var el = document.createElement('div');
    el.innerHTML = students[i].getFullName();
    // Add event
    el.addEventListener("click", function () {
        // Delete class selected from all elements
        for (var j = 0; j < studentsContainer.children.length; j++) {
            studentsContainer.children[j].classList.remove("selected");
        }
        // Add class selected to clicked element
        this.classList.add("selected");
    });
    studentsContainer.append(el);
}


// Add to DOM
document.body.append(studentsContainer);