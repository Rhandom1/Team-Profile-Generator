const Intern = require("../lib/Intern");

test("This is a test for setting the intern name through the class.", () => {
    const name = "Shawn";
    const emp = new Intern(name);

    expect(emp.name).toBe(name)
})
//Have to keep parameters in order or test will move the variable into the first position
test("This is a test for setting the intern id through the class.", () => {
    const name = "Shawn";
    const id = 546
    const emp = new Intern(name, id);

    expect(emp.id).toBe(id)

})

test("This is a test for setting the intern email through the class.", () => {
    const name = "Shawn";
    const id = 546
    const email = "rhandomone@gmail.com";
    const emp = new Intern(name, id, email);

    expect(emp.email).toBe(email)

})

test("This is a test for setting the intern school through the class.", () => {
    const name = "Shawn";
    const id = 546
    const email = "rhandomone@gmail.com";
    const school = "UofMn";
    const emp = new Intern(name, id, email, school);

    expect(emp.school).toBe(school)
})