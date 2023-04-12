class Employee {
  // Parent class
  // If employee is not under any manager we default it to null
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager;

    // If the constructed employee is under a manger or a manager is passed in
    // We add it to that manager's employees list
    if (this.manager instanceof Employee) {
      this.manager.addEmployee(this);
    }
  }

  // If employee is not an
  calculateBonus(multiplier) {
    return this.salary * multiplier;
  }

}

module.exports = Employee;
