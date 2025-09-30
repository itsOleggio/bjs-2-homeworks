function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.subject = null;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
    if (Array.isArray(this.marks) && this.marks.length > 0) {
        return this.marks.reduce((acc, value) => acc + value, 0) / this.marks.length;
    }
    return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
