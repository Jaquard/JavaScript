class FulltimeEmplyee extends Employee {
    constructor(name, department, catagory) {
        super(name);
        super(department);
        super(catagory);
    }
    checkSalary() {
        const fulltimePayrate = 10000;
        const workingHour = 80 * 26;
        if (super.catagory = 'fulltime') {
            const salary = fulltimePayrate * workingHour;
            return console.log(`Your salary is ${salary}원.`);
        } else {
            return console.log('Please check if you are a parttime employee.')
        }
    }
}
class ParttimeEmplyee extends Employee {
    constructor(name, department, catagory) {
        super(name);
        super(department);
        super(catagory);
    }
    checkSalary() {
        const parttimePayrate = 8000;
        const workingHour = 80 * 13;
        if (super.catagory = 'parttime') {
            const salary = parttimePayrate * workingHour;
            return console.log(`Your salary is ${salary}원.`);
        } else {
            return console.log('Please check if you are a fulltime employee.')
        }
    }
}
const employee1 = new FulltimeEmplyee('Ali', 'software', 'fulltime');
employee1.checkSalary();