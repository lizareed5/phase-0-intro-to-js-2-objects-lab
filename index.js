const employee = {
    name: 'Pancake',
    streerAddress: '123 Bark Avenue',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj,key) {
    const deleteEmployee = {...employee};
    delete deleteEmployee[key];
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee[key];
    return employee;
}