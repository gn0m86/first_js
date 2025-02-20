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
  this.course = [{ course, grades: [], attendance: [] }];

  this.addGradeAndAttend = function (course, grade, attended) {
    let find = this.course.find((i) => i.course === course);
    if (find) {
      find.grades.push(grade);
      find.attendance.push(attended);
    }
  };

  this.addGrade = function (course, grade) {
    let find = this.course.find((i) => i.course === course);
    if (find) {
      find.grades.push(grade);
    }
  };

  this.addAttendance = function (course, attended) {
    let find = this.course.find((i) => i.course === course);
    if (find) {
      find.attendance.push(attended);
    }
  };

  this.getAverageGrade = function (course) {
    let find = this.course.find((i) => i.course === course);
    if (find) {
      const sum = find.grades.reduce((a, b) => a + b, 0);
      return sum / find.grades.length;
    }
  };

  this.getAverageAttendance = function (course) {
    let find = this.course.find((i) => i.course === course);
    if (find) {
      const attendedClasses = find.attendance.filter(
        (attended) => attended
      ).length;
      return attendedClasses / find.attendance.length;
    }
  };

  this.getTotalClasses = function (course) {
    let find = this.course.find((i) => i.course === course);
    if (find) {
      return find.attendance.length;
    }
  };

  this.changeCourse = function (newCourse) {
    this.course.push({ course: newCourse, grades: [], attendance: [] });
  };

  this.getStudentInfo = function () {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthYear: this.birthYear,
      course: this.course,
      averageGrade: this.course.map((i) => ({
        course: i.course,
        averageGrade: this.getAverageGrade(i.course),
      })),
      averageAttendance: this.course.map((i) => ({
        course: i.course,
        averageAttendance: this.getAverageAttendance(i.course),
      })),
      totalClasses: this.getTotalClasses(),
    };
  };
}

let nameCourse = "Hillel IT course";
let newCourse = "My new course";
const student = new Student("Михайло", "Черніков", 1986, nameCourse);
student.addGrade(nameCourse, 5);
student.addGrade(nameCourse, 4);
student.addAttendance(nameCourse, true);
student.addAttendance(nameCourse, false);
student.addGradeAndAttend(nameCourse, 2, false);
student.changeCourse(newCourse);
student.addGradeAndAttend(newCourse, 2, true);
console.log(JSON.stringify(student.getStudentInfo(), null, 2));
