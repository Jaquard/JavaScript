// const fruits = ['🍋', '🍌', '🍍', '🥭', '🍑', '🍏', '🍉'];
// const deleted = fruits.splice(1, 2);
// console.log(fruits, 'splice1'); // 배열 자체를 수정(업데이트)//
// console.log(deleted, 'deleted');
// fruits.splice(1, 1, '🍎', '🍓'); //제거후, 추가//
// console.log(fruits, 'fruits1'); // 배열 자체를 수정(업데이트)//

// // 잘라진 새로운 배열을 만듬//

// console.log(fruits, 'fruits2');
// let newArr = fruits.slice(0, 2);
// console.log(newArr, 'slicenums');
// console.log(fruits, 'slice');
// newArr = fruits.slice(-1);
// console.log(newArr, '-1');

// // 여러개의 배열을 붙여줌//

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3, 'concat');

// // 순서를 거꾸로//

// const arr4 = arr3.reverse();
// console.log(arr4, 'reverse');
// console.clear();

// function getNumber() {
//     let nums = [1, 2, 3, 4, 5, 6]
//     let [first, , third, forth] = nums

//     return { first, third, forth }
// }

// console.log(getNumber());

// const prop = {
//     name: 'Button',
//     style: {
//         size: 20,
//         color: 'black'
//     }
// };

// function changeColor({ style: { color } }) {
//     console.log(color);
// }
// changeColor(prop);
// const fruits7 = ['banana', 'apple', 'grapes', 'banana', 'apple', 'peach'];
// const newSet = new Set(fruits7);
// //function  만들기
// function removeDuplication(nums) {
//     return [...new Set(nums)];
// }
// console.log(removeDuplication(newSet));

// console.log(newSet);
// console.log([...newSet]);

// const set1 = new Set([1, 2, 3, 4, 5]);
// const set2 = new Set([1, 2, 3]);

// function findIntersection(nums1, nums2) {

//     const set3 = [...set1]

//     return set3;
// }


// console.log(findIntersection(set1, set2));
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.NaN);
// //Date instance object//
// const now = new Date();
// now.setFullYear(2003);
// now.setMonth(1);

// console.log(now.getFullYear());
// console.log(now.getMonth());

// const date = new Date(); // 로컬기준의 현재 날자와 시간
// console.log(date.getDate()); // 현재 날자

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]


// function replace(nums, from, to) {
//     const replaced = nums.from(nums);
//     for (let i = 0; i < replaced.length; i++) {
//         if (replaced[i] === from) {
//             replaced[i] = to;
//         }
//     }
//     return replaced;
// }

// const nums = ['🍌', '🍓', '🍇', '🍓'];
// const result = nums.forEach(nums, fromstudent, tostudent => nums[i] === from ? fromstudent = tostudent);
// // const result = replace(nums, '🍓', '🥝');
// // console.log(result);

// // 퀴즈2:
// // 배열과 특정한 요소를 전달받아,
// // 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// // input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// // output: 2
// function count(nums, student) {
//     let counter = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === student) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// // 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// // 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// // input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// // output: [ '🍌', '🍇' ]

// function match(input, search) {
//     const result = [];
//     for (let i = 0; i < input.length; i++) {
//         if (search.includes(input[i])) {
//             result.push(input[i]);
//         }
//     }
//     return result;
// }
// console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// function twoSum(nums, target) {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (i === j) {
//                 j++;
//             } else if (nums[i] + nums[j] === target) {
//                 result.push(i, j);
//                 return result;

//             }
//         }
//     }
// };

// function twoSum(nums, target) {
//     const result = [];
//     const indexA = nums.filter(student => find(student => nums.includes(target - student)));
//     const indexB = nums.indexOf(target - nums[indexA]);
//     result.push(indexA, indexB);
//     return result;
// };

// const arr = [1, 2, 4, 5, 8, 4, 2, 7, 6, 21, 3, 4, 2, 4];
// console.log(twoSum(arr, 15));

// const student1 = { name: '🥛', price: 2 };
// const student2 = { name: '🍪', price: 3 };
// const student3 = { name: '🍙', price: 1 };
// const products = [student1, student2, student3, student2];
// let result = products.find((student) => student.name === '🍪');
// console.log('find', result);

// // findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환 =>index
// result = products.findIndex((student) => student.name === '🍪');
// console.log('findIndex', result);


// function isPalindrome(num) {
//     const newArr = String(num).split('');
//     return newArr.forEach((student) => {
//         for (let i = newArr.length - 1; i >= 0; i--) {
//             if (student == newArr[i]) {
//                 true;
//             } else {
//                 false;
//             }
//         }
//     });
// };
// var isPalindrome = function(x) {
//     let pali = x.toString()
//         .split('')
//         .reverse()
//         .join('')
//     let normal = x.toString()
//     return (pali === normal)
// };
// console.log(isPalindrome(1579751));
// let nulls = null;
// console.log(typeof nulls);

// function nullfunction(vari) {
//     if (vari == null) {
//         return true;
//     } else { return false; }
// };
// console.log(nullfunction(nulls));
// const result1 = ['dream', 'coding'].flatMap((text) => text.split(''));

// console.log(result1);

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
console.log(students);
console.log(students.find(student => student.score >= 90));
console.log(students.filter(student => student.enrolled === true));
console.log(students.map(student => student.score));
console.log(students.some(student => student.score <= 50));
console.log(students.every(student => student.score >= 50));

const result6 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result6 / students.length);

console.log(students.reduce((sum, student) => sum += student.score / students.length, 0));
console.log(students.map(student => student.score).join());
const result5 = students
    .map((student) => student.score) //new[]
    .filter((score) => score >= 50) //   [filtered items]
    .join(); // []-->string
console.log(result5);
//sort in ascending order in string
const result4 = students.map(student => student.score)
    .sort((a, b) => a - b)
    .join();
console.log(result4);