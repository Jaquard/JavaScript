const text = 'Hello world!';
for (i = 0; i < text.length; i++) {
    console.log(text[i]);
}
const ids = 'user1,user2,user3,user4';
const arrayIds = ids.split(', ');
console.log(arrayIds);
const time = new Date();
setInterval(() => {
    console.log(time);
}, 1000);