class Employee {
    constructor(name, department, catagory) {
        this.name = name;
        this.department = department;
        this.catagory = catagory;

    }
    c
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

class FulltimeEmplyee extends Employee {
    constructor(name, department, catagory) {
        super(name);
        super(department);
        super(catagory);
    }
    checkSalary() {
            const fulltimePayrate = 10000;
            const parttimePayrate = 8000;
            const fulltimeworkingHour = 80 * 26;
            const parttimeworkingHour = 40 * 13;
            if (super.catagory = 'fulltime') {
                const salary = fulltimePayrate * fulltimeworkingHour;
                fulltimeSalary() {

                    const fulltimePayrate = 10000;
                    const fulltimeHour = 80 * 26;

                    if (this.catagory = 'fulltime') {
                        const salary = fulltimePayrate * fulltimeHour;
                        return console.log(`Your salary is ${salary}원.`);
                    } else if (super.catagory = 'parttime') {
                        const salary = parttimePayrate * parttimeworkingHour;
                        return console.log(`Your salary is ${salary}원.`);
                    } else {
                        return console.log('Please check you are a fulltime employ or a parttime emplyee.')
                    }
                }
            }
            const employee1 = new FulltimeEmplyee('Ali', 'software', 'fulltime');
            employee1.checkSalary();