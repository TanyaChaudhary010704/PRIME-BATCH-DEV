// const username = prompt("Enter your name: ");
// const n = prompt("Enter number of subjects: ");
// const subjects = [];
// const marks = [];
// for (let i = 0; i < n; i++) {
//   subjects[i] = prompt("Enter subject:");
//   marks[i] = prompt("Enter marks out of 100: ");
// }
// console.log(subjects);
// console.log(marks);

// let max = 0;
// let maxSubject = subjects[0];
// for (let i = 0; i < n; i++) {
//   if (marks[i] > max) {
//     max = marks[i];
//     maxSubject = subjects[i];
//   }
// }
// console.log(`Maximum scoring subject : ${maxSubject}`);

// const grade = [];
// for (let i in marks) {
//   let mark = marks[i];
//   if (mark >= 90) {
//     grade[i] = "A";
//   } else if (mark >= 80) {
//     grade[i] = "B";
//   } else if (mark >= 70) {
//     grade[i] = "C";
//   } else {
//     grade[i] = "D";
//   }
// }
// console.log(grade);

const stdInfo = {
  name: "Tanya",
  marks: { "Math": 98, "Science": 87, "EVS": 76, "SST": 69 },
  grades:{}
};

const getInput = (stdInfo) => {
  stdInfo.name = prompt("Enter your name: ");
  const n = prompt("Number of subjects: ");
  let marksObj = {};
  for (let i = 1; i <= n; i++) {
    [key, value] = prompt(
      `Enter Subject${i} , Marks of Subject${i} seperated by ':' :`
    ).split(":");
    marksObj[key] = value;
  }
  stdInfo.marks = marksObj;
};
getInput(stdInfo);

const getMax = (pair) => {
  let maxMark = 0;
  let ans = "";
  for (let key in pair) {
    if (pair[key] > maxMark) {
      ans = key;
      maxMark = pair[key];
    }
  }
  console.log(`Student has maximum marks in ${ans} ie ${maxMark}`);
};
getMax(stdInfo.marks);

const getGrades = (stdInfo) => {
  for (let key in stdInfo.marks) {
    let value = stdInfo.marks[key];
    if (value >= 90) {
      stdInfo.grades[key] = 'A';
    }
    else if (value >= 80) {
      stdInfo.grades[key] = 'B';
    }
    else if (value >= 70) {
      stdInfo.grades[key] = 'C';
    }
    else if (value >= 60) {
      stdInfo.grades[key] = 'D';
    }
    else if (value >= 50) {
      stdInfo.grades[key] = 'E';
    }
    else {
      stdInfo.grades[key] = 'F';
    }
  }
  console.log(stdInfo.grades);
}
getGrades(stdInfo);

console.log(stdInfo);