$(document).ready(onReady);

let employees = [];
monthlyCost = 0;
//created array of employees
function onReady(){
    console.log('working JS/JQ');
    //add an employee with function on click of button
    $('#submitButton').on('click', addEmployee);
    $('#monthlyOut').append(monthlyCost);
    $('#employeeDisplay').on('click', '.item', deleteEmployee);
    // $('#employeeDisplay').on('click','item', removeEmployee);
}

function deleteEmployee(){
    console.log('in delete Employee');
    let el = $(this).parent();
    let search = el.text();
    console.log(el.text());
    el.remove();

    for(i=0;i<employees.length;i++){
        if (search.includes(employees[i].idNumber)){
            employees.splice(i,1)
        }//end removal
    }//end for loop
cost();
}//end deleteEmployee




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
    el.append(`
    <tr>
    <td>${employees[i].firstName}</td>
    <td>${employees[i].lastName}</td>
    <td>${employees[i].idNumber}</td>
    <td>"${employees[i].title}"</td>
    <td>${employees[i].salary} </td>
    <td class="item"><button class="deleteButton">Delete</button></td>
    </tr>`)

}
}

function cost(){
    let temp = 0
    let out = $('#monthlyOut')
    out.empty();
    for(i=0;i<employees.length;i++){
       temp += (employees[i].salary / 12)

    }
    monthlyCost = temp;
    out.append(monthlyCost);
    console.log('monthly cost is:',monthlyCost);
    turnRed();
}

function turnRed(){
    if (monthlyCost > 20000){
$('#monthlyOut').addClass("red")
    }
    if (monthlyCost<=20000){
        $('#monthlyOut').removeClass("red")
    }
}