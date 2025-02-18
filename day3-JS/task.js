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

//----------------------------------------------

// const stdInfo = {
//   name: "Tanya",
//   marks: { "Math": 98, "Science": 87, "EVS": 76, "SST": 69 },
//   grades:{}
// };

// const getInput = (stdInfo) => {
//   stdInfo.name = prompt("Enter your name: ");
//   const n = prompt("Number of subjects: ");
//   let marksObj = {};
//   for (let i = 1; i <= n; i++) {
//     [key, value] = prompt(
//       `Enter Subject${i} , Marks of Subject${i} seperated by ':' :`
//     ).split(":");
//     marksObj[key] = value;
//   }
//   stdInfo.marks = marksObj;
// };
// getInput(stdInfo);

// const getMax = (pair) => {
//   let maxMark = 0;
//   let ans = "";
//   for (let key in pair) {
//     if (pair[key] > maxMark) {
//       ans = key;
//       maxMark = pair[key];
//     }
//   }
//   console.log(`Student has maximum marks in ${ans} ie ${maxMark}`);
// };
// getMax(stdInfo.marks);

// const getGrades = (stdInfo) => {
//   for (let key in stdInfo.marks) {
//     let value = stdInfo.marks[key];
//     if (value >= 90) {
//       stdInfo.grades[key] = 'A';
//     }
//     else if (value >= 80) {
//       stdInfo.grades[key] = 'B';
//     }
//     else if (value >= 70) {
//       stdInfo.grades[key] = 'C';
//     }
//     else if (value >= 60) {
//       stdInfo.grades[key] = 'D';
//     }
//     else if (value >= 50) {
//       stdInfo.grades[key] = 'E';
//     }
//     else {
//       stdInfo.grades[key] = 'F';
//     }
//   }
//   console.log(stdInfo.grades);
// }
// getGrades(stdInfo);

// console.log(stdInfo);

//---------------------------------------------

const getMetaData = () => {
  const name = prompt("Please enter your name");
  console.log("Hello", name);
  const numOfSubText = prompt("Please enter the number of subjects");
  const numOfSub = parseInt(numOfSubText, 10);//parseFloat() Number() ...
  return numOfSub;
};

const getSubjects = (num) => {
  const record = {};
  for (let i = 0; i < num; i++) {
    const subName = prompt("Please enter the name of the subject:" + i);
    const marks = Number(prompt(`Please enter marks for ${subName}`));
    record[subName] = marks;
  }
  console.log(record);
  return record;
}

const getPercentage = (obj) => {
  const marks = Object.values(obj);
  // const subjects = Object.keys(obj);
  // const pairs = Object.entries(obj);
  // console.log(marks);
  // console.log(subjects);
  // console.log(pairs);
  let totalMarks = 0;
  let totalSubjects = 0;
  marks.forEach(ele => {
    totalMarks += ele;
    totalSubjects++;
  });
  let percentage = totalMarks / totalSubjects;
  return percentage;
};

const getHighestScoringSubject = (obj) => {
  const pairs = Object.entries(obj);
  let max = 0;
  let maxScoreSub = pairs[0][0];
  pairs.forEach(pair => {
    if (pair[1] > max) {
      max = pair[1];
      maxScoreSub = pair[0];
    }
  });
  return maxScoreSub;
};

const getGrades = (percentage) => {
  const grades = [
    [60, 'B'],
    [70, 'B+'],
    [80, 'A'],
    [90, 'A+'], 
  ];
  let ans = 'F';
  grades.forEach((grade) => {
    if (percentage >= grade[0]) {
      ans = grade[1];
    }
  });
  // let grade = 'F';
  // const idx = grades.findIndex((grade) => {
  //   if (grade[0] > percentage) {
  //     return true;
  //   }
  //   return false;
  // })
  // if (idx == -1) grade = 'A+';
  // else if (idx > 0) grade = grades[idx - 1][1];
  return ans;
}

// const num = getMetaData();
// const record = getSubjects(num);
const record = {
  "Math": 90,
  "SST": 100,
  "English": 95,
}
const percentage = getPercentage(record);
console.log(percentage);

const HighestScoringSub = getHighestScoringSubject(record);
console.log(HighestScoringSub);

const grades = getGrades(percentage);
console.log(grades);
