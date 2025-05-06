console.log("JavaScript Object Manipulation and JSON Handling\n");
// Task 1: Creating & Updating an Object
// console.log("Task 1: Creating & Updating an Object");

// Create an object with properties
const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

// Access and display values
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

// Update a property
person.city = "San Francisco";

// Log the updated object
console.log("Updated object:", person);
console.log("\n");

// Task 2: Object with a Method
// console.log("Task 2: Object with a Method");

// Create an object with properties and a method
const user = {
  firstName: "Jane",
  lastName: "Smith",
  getFullName: function(){
    return this.firstName + " " + this.lastName;
  }
};

// Call the method and display the result
console.log(user);
const fullName = user.getFullName();
console.log("Full Name:", fullName);
console.log("\n");

// Task 3: Working with JSON Strings
// console.log("Task 3: Working with JSON Strings");

// Create a JSON string
const jsonString = '{"name":"Alice Johnson","email":"alice@example.com","skills":["JavaScript","HTML","CSS"]}';

// Parse the JSON string into an object
const developer = JSON.parse(jsonString);

// Log the values
console.log("Name:", developer.name);
console.log("Email:", developer.email);
console.log("Skills:", developer.skills);
console.log("\n");

// Task 4: Fetching Data from a Local JSON File
// console.log("Task 4: Fetching Data from a Local JSON File");


// Using fetch to read the JSON file
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log("Fetched Users:");
    data.users.forEach(user => {
      console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });