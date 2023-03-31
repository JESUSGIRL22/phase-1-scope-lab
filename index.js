var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Karen';

function changeLeastFavoriteCustomer() {
  // This will throw a TypeError, since you can't reassign a const
  leastFavoriteCustomer = 'Susan';
}
