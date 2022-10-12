const employee = {
    name: ' ',
    streetAddress: ''
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    employee = { ...key, value};
    let streetAddress ="12 Broadway";
    return employee;
}
//function destructivelyUpdateEmployeeWithKeyAndValue(){}