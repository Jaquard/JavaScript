const asIs = (num) => num;
const times2 = (num) => num * 2;

function iterate(max, action) {
    for (i = 0; i <= max; i++) {
        let result = action(i);
        console.log(result);
    }
    return;
}
console.log("separate");
iterate(3, asIs);
console.log("separate");
iterate(3, (num) => console.log(num)); /*화살표함수(arrow function) */
/*인자이므로 ; 이 필요가 없슴*/
console.log("separate");
iterate(3, times2);
console.log("separate");
iterate(3, (num) => console.log(num * 2)); /*화살표함수(arrow function) */
console.log("separate");