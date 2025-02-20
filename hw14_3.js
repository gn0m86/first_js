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

function Group() {
  this.students = [];

  this.addStudent = function (student) {
    this.students.push(student);
  };

  this.removeStudent = function (firstName) {
    this.students = this.students.filter((i) => i.firstName !== firstName);
  };

  this.getAttendanceRanking = function () {
    return this.students
      .map((student) => {
        return {
          firstName: student.firstName,
          lastName: student.lastName,
          averageAttendance: student.course.map((i) => ({
            course: i.course,
            averageAttendance: student.getAverageAttendance(i.course),
          })),
        };
      })
      .sort(
        (a, b) =>
          b.averageAttendance[0].averageAttendance -
          a.averageAttendance[0].averageAttendance
      );
  };

  this.getGradeRanking = function () {
    return this.students
      .map((student) => {
        return {
          firstName: student.firstName,
          lastName: student.lastName,
          averageGrade: student.course.map((i) => ({
            course: i.course,
            averageGrade: student.getAverageGrade(i.course),
          })),
        };
      })
      .sort(
        (first, second) =>
          second.averageGrade[0].averageGrade -
          first.averageGrade[0].averageGrade
      );
  };
}

let nameCourse = "Hillel IT course";
let newCourse = "My new course";

const group = new Group();
const student1 = new Student("Михайло", "Черніков", 1986, nameCourse);
const student2 = new Student("Vitalii", "Ivanov", 1989, nameCourse);
const student3 = new Student("Михайло", "Черніков", 1986, newCourse);
const student4 = new Student("Vitalii", "Ivanov", 1989, newCourse);

group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);
group.addStudent(student4);

student1.addGradeAndAttend(nameCourse, 5, true);
student1.addGradeAndAttend(nameCourse, 4, false);
student2.addGradeAndAttend(nameCourse, 3, true);
student2.addGradeAndAttend(nameCourse, 5, true);

student3.addGradeAndAttend(newCourse, 5, true);
student3.addGradeAndAttend(newCourse, 4, false);
student4.addGradeAndAttend(newCourse, 3, true);
student4.addGradeAndAttend(newCourse, 5, true);

console.log(
  "Рейтинг за відвідуваністю:",
  JSON.stringify(group.getAttendanceRanking(), null, 2)
);
console.log(
  "Рейтинг за успішністю:",
  JSON.stringify(group.getGradeRanking(), null, 2)
);
