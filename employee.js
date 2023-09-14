class Employee {
    constructor(name, department, workingHour, payRate) {
        this.name = name;
        this.department = department;
        this.workingHour = workingHour;
        this.payRate = payRate;
    }
    payCal() {
        return this.workingHour * this.payRate;
    }
}
class FulltimeEployee extends Employee {
    constructor(name, department, workingHour) {
        super(name, department, workingHour, 10000);
    }

}
class ParttimeEmployee extends Employee {
    constructor(name, department, workingHour) {
        super(name, department, workingHour, 8000);
    }

}
const employee_1 = new FulltimeEployee('Ali', 's/w', 35);
const employee_2 = new ParttimeEmployee('Bill', 's/w', 20);
console.log(employee_1.payCal());
console.log(employee_2.payCal());