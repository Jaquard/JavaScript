// const item1 = { name: 'kiwi', taste: 'sout' };
// const item2 = { name: 'grapes', taste: 'very sweet' };
// const item3 = { name: 'watermelon', taste: 'very sweet' };
// const item4 = { name: 'lemon', taste: 'very sour' };
// const item5 = { name: 'banana', taste: 'medium sweet' };
// const objArray = [item1, item2, item3, item4, item5];
// const result = objArray.find((value) => value.name === 'grapes')
// console.log(result);


// const arr1 = ['banana', 'strawberry', 'grapes', 'strawberry'];

// function replacedArray(array, preItem, afterItem) {
//     return array.map(item => item === preItem ? afterItem : item)
// }
// console.log(replacedArray(arr1, 'strawberry', 'kiwi'));


// const arr = ['banana', 'kiwi', 'grapes', 'kiwi', 'watermelon', 'kiwi'];

// function arrayCount(array, wantedItem) {
//     return array.filter(item => item === wantedItem).length;
// }
// console.log(arrayCount(arr, 'kiwi'));


// const arr1 = ['banana', 'watermelon', 'grapes', 'kiwi'];
// const arr2 = ['banana', 'peach', 'grapes', 'mango', 'pineapple'];
// const answer = ['banana', 'grapes'];

// function matchArray(array1, array2) {
//     return array1.filter(item => array2.includes(item));
// }
// console.log(matchArray(arr1, arr2));


const nums = [3, 16, 5, 25, 4, 34, 21];
//filter ->array ->average


const result = nums //
    .filter((item) => item > 5) //
    .reduce((sum, item, _, array) => sum + item / array.length,
        0);

console.log(result);