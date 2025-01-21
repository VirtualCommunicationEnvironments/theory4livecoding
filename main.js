

var a = new Student('Gerard', 'Llorach', 33);

var b = a.getFullName();


var students = [];

var studentsContainer = document.createElement('div');
studentsContainer.classList.add('students-container');

// Add to DOM
document.body.append(studentsContainer);

var studentsData = [];

fetch('data.json').then(res => res.json()).then(res => res.data).then(data => {
  studentsData = data;
  createStudents();
  createHTML();
});


createStudents = () => {
  for (var i in studentsData) {
    var st = studentsData[i];
    students.push(new Student(st.name, st.surname, st.age));
  }
}

createHTML = () => {
  for (var i in students) {
    var st = students[i];

    // Student container
    var stCont = document.createElement('div');
    stCont.classList.add('student-container');

    // Name
    var el = document.createElement('div');
    el.innerHTML = st.getFullName();

    // Image
    var img = document.createElement('img');
    img.src = st.imgLink;
    img.classList.add('user-img');

    // Event binding
    stCont.addEventListener('click', function () {
      for (var i = 0; i < studentsContainer.children.length; i++) {
        var ch = studentsContainer.children[i];
        ch.classList.remove('selected');
      }
      this.classList.add('selected');
    });
    // Add to container
    stCont.append(el);
    stCont.append(img);
    studentsContainer.append(stCont);
  }
}
