const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee, streetAddress};
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    const delEmployee = {...employee};
    delete delEmployee.name;
    return delEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee, name) {
    delete employee.name;
    return employee;
}