// function Course(title, instructor, campus) {
//   this.title = title;
//   this.instructor = instructor;
//   this.campus = campus;
// }

// let janCohort = new Course("immersive bootcamp", "Veronica", "Houston");

// console.log(janCohort.title);

let x = function(j) {
  this.i = 0;
  this.j = j;
};

x.prototype.getJ = function() {
  return this.j;
};

x1 = new x(2);

x2 = new x(3);
