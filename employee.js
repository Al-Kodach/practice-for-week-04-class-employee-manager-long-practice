class Employee {
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager;
    if (this.manager instanceof Employee) {
      this.manager.addEmployee(Object(this));
    }
  }

  calculateBonus(multiplier) {
    if (this instanceof Employee && !this.employees) {
      return this.salary * multiplier;
    }

    if (this instanceof Employee && this.employees) {
      let subtotal = this._totalSubSalary(this.employees);
      return (this.salary + subtotal) * multiplier;
    }
  }

  _totalSubSalary(arr, subT = 0) {
    // base case
    if (!arr.length) {
      return subT;
    }

    let current = arr[0];
    let salary = current.salary;

    if (current.employees) {
      return this._totalSubSalary(
        current.employees, (subT += salary)
      );
    }

    return this._totalSubSalary(
      arr.slice(1), (subT += salary)
    );
  }
}

module.exports = Employee;
