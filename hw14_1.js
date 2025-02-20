process.stdout.write("\033c\u001b[0J\u001b[1J\u001b[2J\u001b[0;0H\u001b[0;0W");
console.arr = (...args) =>
  console.table(args.map((i, index) => ({ [`param_${index + 1}`]: i })));

// Вам необхідно створити конструктор Студента, у якого мають бути властивості: ім'я, прізвище, рік народження, оцінки, відвідуваність, курс.
// Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент. Так само у Студента є методи:
// додати оцінку, додати відвідування, отримати середню успішність, отримати середнє відвідування, отримати кількість пройдених занять,
//  змінити курс (мають оновитися дані про курс), а також отримати всю інформацію про студента.

function Student(firstName, lastName, birthYear, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = [];
  this.course = course;

  this.addGradeAndAttend = function (grade, attendance) {
    this.grades.push(grade);
    this.attendance.push(attendance);
  };

  this.addGrade = function (grade) {
    this.grades.push(grade);
  };

  this.addAttendance = function (attended) {
    this.attendance.push(attended);
  };

  this.getAverageGrade = function () {
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  };

  this.getAverageAttendance = function () {
    const attendedClasses = this.attendance.filter(
      (attended) => attended
    ).length;
    return attendedClasses / this.attendance.length;
  };

  this.getTotalClasses = function () {
    return this.attendance.length;
  };

  this.changeCourse = function (newCourse) {
    this.course = newCourse;
  };

  this.getStudentInfo = function () {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthYear: this.birthYear,
      grades: this.grades,
      attendance: this.attendance,
      course: this.course,
      averageGrade: this.getAverageGrade(),
      averageAttendance: this.getAverageAttendance(),
      totalClasses: this.getTotalClasses(),
    };
  };
}

const student = new Student("Михайло", "Черніков", 1986, "Hillel IT course");
student.addGrade(5);
student.addGrade(4);
student.addAttendance(true);
student.addAttendance(false);
student.addGradeAndAttend(2, false);

console.log(student.getStudentInfo());
