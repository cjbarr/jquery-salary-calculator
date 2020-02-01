$(document).ready(onReady);

let employees = [];
monthlyCost = 0;
//created array of employees
function onReady(){
    console.log('working JS/JQ');
    //add an employee with function on click of button
    $('#submitButton').on('click', addEmployee);
    $('#monthlyOut').append(monthlyCost);
    $('#employeeDisplay').on('click', '.deleteButton', deleteEmployee);
    
}

function deleteEmployee(){
    console.log('in delete Employee');
    let el = ($(this).parent()).parent();
    el.remove();



    //lebuttonelement.parent
    // Element.tparent
    // remeove

    // let el = $(this).parent();
    // console.log(el)
    // let string = el[0].innerText;
    // let index = string.lastIndexOf(' ');
    // string = string.substring(0,index);
    // console.log(string);
    // for(let i=0;i<employees.length;i++){
    //     //id number because no chance of repeats unlike name
    //     if (employees[i].idNumber==string){
    //         employees.splice(i,1);
    //     }//end if
    // }//end for loop
    employeeDisplay();
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
    <td> <button class="deleteButton">Delete</button></td>
    </tr>`)

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