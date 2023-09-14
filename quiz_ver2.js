class Employee {
    constructor(name, department, payRate) {
        this.name = name;
        this.department = department;
        this.catagory = catagory;
    }

}
const employee_1 = new Employee('Ali', 'software', 'fulltime');
employee_1.checkSalary();
const employee_2 = new Employee('John', 'marketing', 'parttime');
employee_2.checkSalary();