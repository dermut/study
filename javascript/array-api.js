// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits);

    let fruitsString = fruits.join('');
    console.log(fruitsString);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits);

    const arrayFruits = fruits.split(',');
    console.log(arrayFruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const reverseArray = array.reverse();
    console.log(reverseArray);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];

    // splice는 배열 자체를 건드리기 때문에 이슈가 될 수 있음.
    // let spliceLength = 2;
    // const spliceArray = array.splice(spliceLength, array.length + 1);
    // console.log(spliceArray);

    // 엘리의 답
    const result = array.slice(2, 5);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const studentScored90 = students.find((element) => element.score === 90);
    console.log(studentScored90);
}

// Q6. make an array of enrolled students
{
    // enrolled === true는 생략이 가능, default가 true이기 때문.
    const enrolledStudents = students.filter((element) => element.enrolled);
    console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    let studentScoreArray = [];
    students.forEach(element => studentScoreArray.push(element.score));
    console.log(studentScoreArray);

    // 엘리의 답
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const hasStudentScoredLower50 = students.filter((element) => element.score < 50).length > 0 ? true : false;
    console.log(hasStudentScoredLower50);

    // 엘리의 답
    const result = students.some((student) => student.score < 50);
    console.log(result);
}

// Q9. compute students' average score
{
    let totalScore = 0;
    students.forEach(element => totalScore += element.score);
    console.log(totalScore / students.length);

    // 엘리의 답
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let studentScoreArray = [];
    students.forEach(element => studentScoreArray.push(element.score));
    console.log(studentScoreArray.join(', '));
    
    // 엘리의 답
    const result = students
        .map(student => student.score)
        .filter((score) => score >= 50)
        .join(', ')
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let studentScoreArray = [];
    students.forEach(element => studentScoreArray.push(element.score));
    console.log(studentScoreArray.sort().join(', '));

    // 엘리의 답
    const result = students
        .map(student => student.score)
        .sort()
        .join(', ')
    console.log(result);
}