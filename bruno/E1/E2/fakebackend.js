// class Employee{
//     constructor(uniqueID, firstName, lastName, emailAddress ,jobTitle, salary ){
//         this.uniqueID=uniqueID;
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.emailAddress=emailAddress;
//         this.jobTitle=jobTitle;
//         this.salary=salary;
//     }
// }


// let employee1 = new Employee("1892471824071", "Bruno", "Kreppel", "bruno.kreppel@gmail.com", "none", "1euro");
// let employee2 = new Employee("1234567890123", "Alice", "Johnson", "alice.johnson@email.com", "HR", "50000");
// let employee3 = new Employee("4567890123456", "Bob", "Smith", "bob.smith@email.com", "IT", "60000");
// let employee4 = new Employee("7890123456789", "Eva", "Perez", "eva.perez@email.com", "Marketing", "55000");
// let employee5 = new Employee("5678901234567", "John", "Doe", "john.doe@email.com", "Finance", "65000");
// let employee6 = new Employee("2345678901234", "Sarah", "Johnson", "sarah.johnson@email.com", "Sales", "60000");
// let employee7 = new Employee("8901234567890", "Peter", "Brown", "peter.brown@email.com", "Operations", "55000");
// let employee8 = new Employee("3456789012345", "Emily", "Davis", "emily.davis@email.com", "Legal", "70000");
// let employee9 = new Employee("9012345678901", "Michael", "Smithson", "michael.smithson@email.com", "Engineering", "75000");
// let employee10 = new Employee("6789012345678", "Grace", "Lee", "grace.lee@email.com", "Research", "62000");



// let emplyeesArr = [employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10]


// let emplyeesArrString = JSON.stringify(emplyeesArr) 
// console.log(emplyeesArrString)


 let mydata = JSON.parse(Employees);

 console.log(mydata)


 let table = document.getElementById("employee_table")



mydata.forEach((value, index )=> {
    table.innerHTML += `    
    <tr>
    <th scope="row">${index + 1}</th>
    <th scope="row">${value.id}</th>
    <td>${value.firstName}</td>
    <td>${value.lastName}</td>
    <td>${value.email}</td>
    <td>${value.department}</td>
    <td>${value.salary}</td>
  </tr>

    
    
    
    `
    
});


console.table(mydata)
