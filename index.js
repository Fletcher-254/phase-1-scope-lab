// Write your solution in this file!
// Declare a global variable using var
var customerName = 'bob';

// Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that sets a global variable from inside the function
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declared globally (not using var/let/const)
}

// Function that overwrites the global bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a global constant
const leastFavoriteCustomer = 'john';

// Function that attempts to change the constant
function changeLeastFavoriteCustomer() {
  // This will cause a TypeError: Assignment to constant variable.
  leastFavoriteCustomer = 'mary';
}
