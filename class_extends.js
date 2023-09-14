class Employee {
    constructor(name, department, workHour, payRate) {
        this.name = name;
        this.department = department;
        this.workHour = workHour;
        this.payRate = payRate;
    }
    payCalculator() {
        return this.workHour * this.payRate;
    }
}

class FulltimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, workHour) {
        super(name, department, workHour, FulltimeEmployee.PAY_RATE);
    }
}
class ParttimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, workHour) {
        super(name, department, workHour, ParttimeEmployee.PAY_RATE);
    }
}
const employee_1 = new FulltimeEmployee('Ali', 'software', '35');
console.log(employee_1.payCalculator());
const employee_2 = new ParttimeEmployee('John', 'marketing', '20');
console.log(employee_2.payCalculator());
const fruits = Array.of('banana', 'strawberry', 'grapes', 'strawberry');
const newFruits = fruits.