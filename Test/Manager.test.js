const Manager = require("../lib/Manager");

test("This is a test for setting the manager name through the class.", () => {
    const name = "Shawn";
    const emp = new Manager(name);

    expect(emp.name).toBe(name)
})
//Have to keep parameters in order or test will move the variable into the first position
test("This is a test for setting the manager id through the class.", () => {
    const name = "Shawn";
    const id = 546
    const emp = new Manager(name, id);

    expect(emp.id).toBe(id)

})

test("This is a test for setting the manager email through the class.", () => {
    const name = "Shawn";
    const id = 546
    const email = "rhandomone@gmail.com";
    const emp = new Manager(name, id, email);

    expect(emp.email).toBe(email)

})

test("This is a test for setting the manager office number through the class.", () => {
    const name = "Shawn";
    const id = 546
    const email = "rhandomone@gmail.com";
    const officeNumber = 201;
    const emp = new Manager(name, id, email, officeNumber);

    expect(emp.officeNumber).toBe(officeNumber)
})