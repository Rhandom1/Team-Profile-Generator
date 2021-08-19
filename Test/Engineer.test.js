const Employee = require("../lib/Employee");

test("This is a test for setting the engineer name through the class.", () => {
    const name = "Shawn";
    const emp = new Employee(name);

    expect(emp.name).toBe(name)
})
//Have to keep parameters in order or test will move the variable into the first position
test("This is a test for setting the engineer id through the class.", () => {
    const name = "Shawn";
    const id = 546
    const emp = new Employee(name, id);

    expect(emp.id).toBe(id)

})

test("This is a test for setting the engineer email through the class.", () => {
    const name = "Shawn";
    const id = 546
    const email = "rhandomone@gmail.com";
    const emp = new Employee(name, id, email);

    expect(emp.email).toBe(email)

})

test("This is a test for setting the engineer gitHub through the class.", () => {
    const name = "Shawn";
    const id = 546
    const email = "rhandomone@gmail.com";
    const gitHub = "Rhandom1";
    const emp = new Employee(name, id, email, gitHub);

    expect(emp.gitHub).toBe(gitHub)
})