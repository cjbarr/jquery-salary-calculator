$(document).ready(onReady);

let employees = [];
monthlyCost = 0;
//created array of employees
function onReady(){
    console.log('working JS/JQ');
    //add an employee with function on click of button
    $('#submitButton').on('click', addEmployee);
    $('#monthlyOut').append(monthlyCost);
    
}

function addEmployee(){
console.log("in addEmployee")
//grab employee values as a new object
    let newObject = { firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        title: $('#titleIn').val(),
        salary: $('#salaryIn').val()
    }

    //emptying fields
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');
    //pushing object and displaying array value
    employees.push(newObject);
    employeeDisplay();
    cost();
}

function employeeDisplay(){
    let el = $('#employeeDisplay');
    el.empty();
    for (i = 0; i < employees.length; i++){  
    el.append(`<li>First: ${employees[i].firstName} Last: ${employees[i].lastName} ID Number: ${employees[i].idNumber} Title: "${employees[i].title}" Salary: ${employees[i].salary} </li>`)

}
}

function cost(){
    let temp = 0
    let el = $('#monthlyOut')
    el.empty();
    for(i=0;i<employees.length;i++){
       temp += (employees[i].salary / 12)

    }
    monthlyCost = temp;
    el.append(monthlyCost);
    console.log('monthly cost is:',monthlyCost);
    turnRed();
}

function turnRed(){
    if (monthlyCost > 20000){
$('#monthlyOut').addClass("red")
    }
}