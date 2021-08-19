const Employee = require("../lib/Employee");

test("This is a test for setting the employee name through the class.", () => {
    const name = "Shawn";
    const emp = new Employee(name);

    expect(emp.name).toBe(name)
})