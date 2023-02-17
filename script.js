function addEmp() {
    employee = { ename: nameid.value, id: empid.value, desig: desid.value, sal: salid.value, exp: expid.value }

    if (employee.id in localStorage) {
        alert("Employee already exist")
        window.location = "home.html"

    }
    else {
        localStorage.setItem(employee.id, JSON.stringify(employee))
        alert("new employee added")
        window.location = "home.html"
    }

}
function idSearch() {
    //access user input (employee id from input box)
    keyid = s1.value
    //check if its
    if (keyid in localStorage) {
        emp = JSON.parse(localStorage.getItem(keyid))
        // console.log(emp);
        resultid.innerHTML=`
        <h3 class="text-info">Employee Name ${emp.ename}</h3>
        <h3 class="text-info">Employee ID ${emp.id}</h3>
        <h3 class="text-info">Employee Designation ${emp.desig}</h3>
        <h3 class="text-info">Employee Salary ${emp.sal}</h3>
        <h3 class="text-info">Employee Experiance ${emp.exp}</h3>

        `


    }
    else {
        resultid.innerHTML=""
        alert("Employee not present")
        
    }

}