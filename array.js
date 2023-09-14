// const arr1 = [
//     'banana',
//     'qiwi',
//     'strawberry'
// ];
// const arr2 = [
//     'banana',
//     'strawberry',
//     'grapes',
//     'strawberry'
// ];

// function matchItem(array1, array2) {
//     const matchItemArray = [];
//     for (i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             matchItemArray.push(array1[i]);
//         }
//     }
//     return matchItemArray;
// }

// console.log(matchItem(arr1, arr2));


// console.log('before', arr1);

// for (i = 0; i < arr1.length; i++) {
//     const arr3 = [];
//     if (arr2.includes(arr1[i]) == true) {
//         arr3.push(arr1[i]);
//         return console.log('after', arr3);
//     } else {
//         delete arr1[i];
//         return arr3;
//     }
// }
// console.log('after', arr1);



// const arr4 = ['banana', 'kiwi', 'strawberry', 'kiwi'];

// function count(array, item) {
//     const counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(count(arr4, 'kiwi'));


// const arr6 = ['banana', 'strawberry', 'grapes', 'strawberry'];

// function replace(array, a, b) {
//     const replacedArray = Array.from(array);
//     for (i = 0; i < replacedArray.length; i++) {
//         if (replacedArray[i] === a) {
//             replacedArray[i] = b;
//         }
//     }
//     return replacedArray;
// }
// const result = replace(arr6, 'strawberry', 'qiwi');
// console.log(result);

// const asis = (num) => num;
// const twice = (num) => 2 * num;

// function iter(max, action) {
//     for (let i = 0; i <= max; i++) {
//         const result = action(i);
//         console.log(result);
//     }
// }
// iter(3, twice);

const objArray = [item1, item2, item3, item4, item5];
const item1 = { name: 'kiwi', taste: 'sout' };
const item2 = { name: 'grapes', taste: 'very sweet' };
const item3 = { name: 'watermelon', taste: 'very sweet' };
const item4 = { name: 'lemon', taste: 'very sour' };
const item5 = { name: 'banana', taste: 'medium sweet' };
const found = objArray.find()