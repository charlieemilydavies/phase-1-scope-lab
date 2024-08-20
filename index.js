// 1) Declare customerName in the global scope and initialize it to 'bob'
var customerName = "bob";

// Function that returns the customerName
function getCustomerName() {
  return customerName;
}

// 2) Function that modifies the customerName variable to upper case
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3) Declare bestCustomer variable in global scope
var bestCustomer;

// Function that sets the best customer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// 4) Function that overwrites the best customer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// 5) Declare leastFavoriteCustomer with const to prevent reassignment
const leastFavoriteCustomer = "someone else";

// Function that unsuccessfully tries to reassign leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another new person";
}
