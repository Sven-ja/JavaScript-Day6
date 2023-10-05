class Employee {
    // uniqueID;
    // firstName;
    // lastName;
    // emailAddress;
    // jobTitle;
    // salary;

    constructor(id, firstName, lastName, email, title, salary) {
        this.uniqueID = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = email;
        this.jobTitle = title;
        this.salary = salary;
    }
}

let employee1 = new Employee("1234", "Peter", "Portmann", "peter.portmann@gmail.com", "does everything", "almost nothing");
let employee2 = new Employee("5678", "Sarah", "Smith", "sarah.smith@gmail.com", "manages projects", 1500);
let employee3 = new Employee("9012", "John", "Doe", "john.doe@gmail.com", "designs websites", 1800);
let employee4 = new Employee("3456", "Emily", "Johnson", "emily.johnson@gmail.com", "teaches mathematics", 2200);
let employee5 = new Employee("7890", "Michael", "Brown", "michael.brown@gmail.com", "writes code", 1700);
let employee6 = new Employee("2345", "Jessica", "Davis", "jessica.davis@gmail.com", "coordinates events", 1600);
let employee7 = new Employee("6789", "David", "Wilson", "david.wilson@gmail.com", "manages finances", 1900);
let employee8 = new Employee("1235", "Jennifer", "Anderson", "jennifer.anderson@gmail.com", "analyzes data", 2100);
let employee9 = new Employee("5679", "Robert", "Thompson", "robert.thompson@gmail.com", "solves problems", 2000);
let employee10 = new Employee("9013", "Michelle", "White", "michelle.white@gmail.com", "creates marketing campaigns", 2300);

const employeeArr = [employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10];

let employ = JSON.stringify(employeeArr);