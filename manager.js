const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager = null, employees = []) {
    super(name, salary, title, manager);
    this.employees = employees;
  }

  addEmployee(employee) {
    return this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    const totalSubSalary = this._totalSubSalary();
    // return the sum of managers salary and totalSubSalary multiply by multiplier
    return (this.salary + totalSubSalary) * multiplier;
  }

  _totalSubSalary() {
    // running sum
    let subsalary = 0;

    // iterate Manager's employees array
    for (let employee of this.employees) {
      this.employee = employee;

      // if Manger's employee is a manager, we iterate his/her employees arr
      // we all all sub salary to our running sum
      if (this.employee instanceof Manager) {
        subsalary += this.employee._totalSubSalary();
      }

      // if not, we just add the each employee's salary
      subsalary += this.employee.salary;
    }

    // we return the totalSubSalary of current Manager.
    return subsalary;
  }
}

const hobbes = new Manager("Hobbes", 1000000, "Founder");
const calvin = new Manager("Calvin", 130000, "Director", hobbes);
const susie = new Manager("Susie", 100000, "TA Manager", calvin);
const lily = new Employee("Lily", 90000, "TA", susie);
const clifford = new Employee("Clifford", 90000, "TA", susie);

console.log(hobbes.calculateBonus(0.05)); // => 70500
console.log(calvin.calculateBonus(0.05)); // => 20500
console.log(susie.calculateBonus(0.05)); // => 14000
console.log(lily.calculateBonus(0.05)); // => 4500
console.log(clifford.calculateBonus(0.05)); // => 4500

module.exports = Manager;
