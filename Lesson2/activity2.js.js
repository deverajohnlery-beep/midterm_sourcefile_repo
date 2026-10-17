// Student Class
class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let total = 0;

        for (let score of this.scores) {
            total += score;
        }

        return total / this.scores.length;
    }

    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

// Analyze Students
function analyzeStudents(students) {
    let totalAverage = 0;

    for (let student of students) {
        let average = student.getAverage();
        let grade = student.getLetterGrade();

        console.log(
            student.name + " - Average: " +
            average.toFixed(1) + " | Grade: " + grade
        );

        totalAverage += average;
    }

    let classAverage = totalAverage / students.length;

    console.log("Class Average: " + classAverage.toFixed(1));
}

// Student Data
let students = [
    new Student("Charlie", [85, 90, 88]),
    new Student("John", [78, 82, 80]),
    new Student("Maria", [92, 95, 90])
];

// Run the program
analyzeStudents(students);