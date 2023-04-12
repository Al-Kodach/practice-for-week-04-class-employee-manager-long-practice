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
    const totalSubSalary = this._totalSubSalary(this.employees);
    // return the sum of managers salary and totalSubSalary multiply by multiplier
    return (this.salary + totalSubSalary) * multiplier;
  }

  _totalSubSalary(arr, sum = 0) {
    // base case, empty array
    if (!arr.length || undefined) {
      return sum;
    }

    // current employee
     this.employee = arr[0];

    if (this.employee instanceof Manager) {
      return this.employee._totalSubSalary(this.employee.employees, sum += this.employee.salary);
    }

    return this._totalSubSalary(arr.slice(1), sum += this.employee.salary);
  }
}

const splinter = new Manager("Splinter", 100000, "Sensei");
const leo = new Manager("Leonardo", 90000, "Ninja", splinter);
const raph = new Manager("Raphael", 90000, "Ninja", leo);
const mikey = new Employee("Michelangelo", 85000, "Grasshopper", raph);
const donnie = new Employee("Donatello", 85000, "Grasshopper", raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000

module.exports = Manager;
