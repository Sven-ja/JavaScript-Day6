console.log(employ);

let employeees = JSON.parse(employ);
console.log(employeees);

employeees.forEach((object, index) => {
    document.getElementById("body").innerHTML +=
        `
        <tr>
                <th scope="row">${index + 1}</th>
                <td>${object.uniqueID}</td>
                <td>${object.firstName}</td>
                <td>${object.lastName}</td>
                <td>${object.emailAddress}</td>
                <td>${object.jobTitle}</td>
                <td>${object.salary}</td>
            </tr>
    `
});