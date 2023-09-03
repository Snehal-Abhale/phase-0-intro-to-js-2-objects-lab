// Write your solution in this file!
const employee={
    name:'Sam',
};
function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const newObj = { ...employee};

    newObj[key] = value;
  
    return newObj;
}
console.lo(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
  
    return employee;

}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(
      employee,
      "streetAddress",
      "12 Broadway"
    )
  );
  function deleteFromEmployeeByKey(object, key) {
    let object3 = { ...object };
    delete object3[key];
    return object3;
  }
  console.log(deleteFromEmployeeByKey(employee, "name"));

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
  }
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));