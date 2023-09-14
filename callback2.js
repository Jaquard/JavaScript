class Counter {
    constructor(runFiveTimesCallback) {
        this.counter = 0;
        this.callback = runFiveTimesCallback;
    }
    increase() {
        this.counter++;
        if (this.counter === 5) {
            this.callback && this.callback(this.counter); ///원래 if(this.callback){this.callback(this.counter);} ///
        } else {
            console.log(this.counter);
        }
    }
}

function everyFiveTimes(num) {
    console.log(`Wow it's ${num}!`)
}

function alertFiveTimes(num) {
    alert(`Alert! It's ${num}!`)
}
const tellingFiveMsg = new Counter(everyFiveTimes);
const alertingFiveMgs = new Counter(alertFiveTimes);

tellingFiveMsg.increase();
alertingFiveMgs.increase();

tellingFiveMsg.increase();
alertingFiveMgs.increase();

tellingFiveMsg.increase();
alertingFiveMgs.increase();

tellingFiveMsg.increase();
alertingFiveMgs.increase();

tellingFiveMsg.increase();
alertingFiveMgs.increase();