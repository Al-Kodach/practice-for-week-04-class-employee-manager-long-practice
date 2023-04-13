const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Employee = require('../employee');
const Manager = require('../manager');

describe('The calculateBonus(multiplier) method', () => {
    let hobbes;
    let calvin;
    let susie;
    let lily;
    let clifford;

    beforeEach(() => {
        hobbes = new Manager('Hobbes', 1000000, 'Founder');
        calvin = new Manager('Calvin', 130000, 'Director', 'Hobbes');
        susie = new Manager('Susie', 100000, 'TA manager', 'Calvin');
        lily = new Employee('Lily', 90000, 'TA', 'Susie');
        clifford = new Employee('clifford', 90000, 'TA', 'Susie');
    })

    describe('Employee.calculateBonus()', () => {
        it('should multiply the Employee\'s salary by a passed in multiplier', () => {
            expect(lily.calculateBonus(0.05)).to.equal(4500);
            expect(clifford.calculateBonus(0.05)).to.equal(4500);
        });
    });

    describe('Managers.calculateBonus(multiplier', () => {
        if("should multiplier manager's salary + a total of sub salaries of employees", () => {
            expect(hobbes.calculateBonus(0.05).to.equal(70250));
            expect(calvin.calculateBonus(0.05).to.equal(20250));
            expect(susie.calculateBonus(0.05).to.equal(13750));
        });
    });

    describe("Manager's _totalSubSalary()", () => {
        it('should be called in calculateBonus()', () => {
            const spy = chai.spy.on(hobbes, '_totalSubSalary');
            hobbes.calculateBonus();
            expect(spy).to.have.been.called();
        });

        // context("if element in this.employee array is an instanceOf Manager,", () => {
        //     it("should recursively call itself, adding all sub-Employees salary to a running sum", () => {
        //         // Hoobe's only employee is Calvin but Calvin employee is Susie who may also have employees under her
        //         const totalSubSalary = hobbes._totalSubSalary();
        //         expect(hobbes._totalSubSalary().to.equal(405000));
        //     });
        // });

        // context("if element in this.employee's array is an instanceOf Employee,", () => {
        //     it("should add employee's salary to the running sum", () => {
        //         const totalSubSalary = susie._totalSubSalary();
        //         expect(susie._totalSubSalary().to.equal(175000));
        //     });
        // });
    });
})
